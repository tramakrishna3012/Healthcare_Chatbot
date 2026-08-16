require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const { errorHandler } = require('./middleware/errorHandler');
const symptomRoutes = require('./routes/symptoms');
const logger = require('./config/logger');
const { connectDB } = require('./config/database');
const geminiAPI = require('./services/geminiAPI');
const cors = require("cors");
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use((req, res, next) => {
    res.setHeader(
        'Content-Security-Policy',
        "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; connect-src 'self' ws: wss:;"
    );
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Routes
app.use('/api/symptoms', symptomRoutes);

// New routes from health-ai
const chatRouter = require('./routes/chat');
const authRouter = require('./routes/auth');
const consultationRouter = require('./routes/consultation');
const imageToTextRouter = require('./routes/imageToText');

app.use('/api/chat', chatRouter);
app.use('/api/auth', authRouter);
app.use('/api/consultation', consultationRouter);
app.use('/api/image-to-text', imageToTextRouter);

const axios = require('axios');
const fs = require('fs');

// ML Prediction proxy route (for unified single-container deployment)
app.post('/predict', async (req, res) => {
    try {
        const mlUrl = process.env.INTERNAL_ML_URL || 'http://127.0.0.1:8000';
        const response = await axios.post(`${mlUrl}/predict`, req.body);
        return res.status(200).json(response.data);
    } catch (error) {
        logger.error(`Error forwarding to ML service: ${error.message}`);
        return res.status(500).json({ error: 'Failed to communicate with ML service' });
    }
});

// Serve React Frontend static assets (Swasthya-Sampark UI)
const frontendDist = process.env.FRONTEND_DIST || path.join(__dirname, '../swasthyaSampark/dist');
if (fs.existsSync(frontendDist)) {
    logger.info(`Serving frontend from: ${frontendDist}`);
    app.use(express.static(frontendDist));
    app.get('*', (req, res, next) => {
        if (req.path.startsWith('/api') || req.path.startsWith('/predict') || req.path.startsWith('/socket.io')) {
            return next();
        }
        res.sendFile(path.join(frontendDist, 'index.html'));
    });
} else {
    app.use(express.static(path.join(__dirname, 'public')));
}

// Error handling
app.use(errorHandler);

// Database connection
connectDB();

// Check Gemini API health every 5 minutes
setInterval(async () => {
    const isHealthy = await geminiAPI.checkApiHealth();
    if (!isHealthy) {
        logger.warn('Gemini API is not accessible');
    }
}, 5 * 60 * 1000);

module.exports = app;