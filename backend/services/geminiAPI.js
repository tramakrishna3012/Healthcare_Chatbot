const { GoogleGenerativeAI } = require("@google/generative-ai");
const logger = require('../config/logger');
const symptomDataset = require("../data/symptomDataset");

const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY || process.env.API_KEY2;
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

const getCandidateModels = () => {
    const primary = process.env.MODEL_NAME || "gemini-1.5-flash";
    const backup = process.env.MODEL_NAME2 || "gemini-1.5-pro";
    const candidates = [primary, backup, "gemini-1.5-flash-latest", "gemini-1.5-flash", "gemini-2.0-flash", "gemini-pro"];
    return Array.from(new Set(candidates.filter(Boolean)));
};

exports.expandSymptom = async (symptom) => {
    if (!genAI) {
        logger.error('Gemini API key is not configured');
        return null;
    }

    try {
        logger.info(`Expanding symptom: ${symptom}`);

        const prompt = `
        You are a medical AI assistant with access to a comprehensive symptom dataset that maps diseases to their associated symptoms.
        Given the initial symptom "${symptom}", use this dataset to identify related symptoms and potential diseases.
        Provide a list of related symptoms or follow-up questions to narrow down the possible conditions. 
        Format your response as a JSON object with the following structure:
        
        {
          "type": "multiple_choice",
          "question": "The question to ask the user about related symptoms or to narrow down the condition",
          "options": ["Related symptom ", "Related symptom ", ...]
        }
        
        Ensure that your options are directly related to the initial symptom and the potential diseases associated with it in the symptom dataset.
        Do not include any explanatory text or additional information. Only provide the JSON object.
        If the initial symptom is very specific and strongly indicates a particular condition, 
        you may provide options that are diagnostic criteria or additional symptoms of that condition.
        Remember to use the "${symptomDataset}" as your primary reference to maintain accuracy and relevance in your responses. Also do exclude the symptoms which are already present in "${symptom}"`;

        const models = getCandidateModels();
        let lastError = null;

        for (const modelName of models) {
            try {
                const model = genAI.getGenerativeModel({ model: modelName });
                const result = await model.generateContent(prompt);
                const response = await result.response;
                const text = response.text();

                const cleanedText = text.replace(/```json\n|\n```|```/g, '').trim();
                const parsedResponse = JSON.parse(cleanedText);
                logger.info(`Symptom expanded successfully using model ${modelName}: ${symptom}`);
                return parsedResponse;
            } catch (err) {
                lastError = err;
                logger.warn(`Model ${modelName} failed, trying next candidate: ${err.message}`);
            }
        }

        throw lastError || new Error('All candidate models failed');
    } catch (error) {
        logger.error(`Error expanding symptom with Gemini API: ${error.message}`);
        return null;
    }
};

exports.checkApiHealth = async () => {
    if (!genAI) return false;

    const models = getCandidateModels();
    for (const modelName of models) {
        try {
            const model = genAI.getGenerativeModel({ model: modelName });
            await model.generateContent("ping");
            return true;
        } catch (error) {
            // continue checking next model
        }
    }
    return false;
};