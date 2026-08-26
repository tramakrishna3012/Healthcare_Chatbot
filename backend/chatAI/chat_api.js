const {
  GoogleGenerativeAI,
  HarmBlockThreshold,
  HarmCategory,
} = require("@google/generative-ai");
require("dotenv").config();

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
];

const getApiKeys = () => {
  const keys = [
    process.env.GEMINI_API_KEY,
    process.env.API_KEY,
    process.env.API_KEY2,
    process.env.GOOGLE_API_KEY,
  ].filter((key) => typeof key === "string" && key.trim() !== "");
  return Array.from(new Set(keys));
};

const getCandidateModels = () => {
  const primary = process.env.MODEL_NAME;
  const backup = process.env.MODEL_NAME2;
  const models = [
    primary,
    backup,
    "gemini-1.5-flash-latest",
    "gemini-1.5-flash",
    "gemini-2.0-flash",
    "gemini-1.5-pro",
    "gemini-pro",
  ].filter((m) => typeof m === "string" && m.trim() !== "");
  return Array.from(new Set(models));
};

async function run(_input) {
  const apiKeys = getApiKeys();
  if (apiKeys.length === 0) {
    console.error("No Gemini API keys configured in environment variables!");
    return "Gemini API key is not configured. Please add GEMINI_API_KEY to your environment.";
  }

  const models = getCandidateModels();
  let lastError = null;

  for (const apiKey of apiKeys) {
    const genAI = new GoogleGenerativeAI(apiKey);

    for (const modelName of models) {
      try {
        const model = genAI.getGenerativeModel({
          model: modelName,
          safetySettings,
        });

        const prompt = typeof _input === "string" ? _input : JSON.stringify(_input);
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        if (text && text.trim() !== "") {
          return text;
        }
      } catch (err) {
        lastError = err;
        console.warn(
          `Gemini model ${modelName} failed with key (...${apiKey.slice(-6)}): ${err.message}`
        );
      }
    }
  }

  console.error("All Gemini API keys and candidate models failed:", lastError?.message);
  return "I apologize, but I am currently having trouble processing your request. Please try again shortly.";
}

module.exports = run;
