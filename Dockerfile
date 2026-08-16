# ==============================================================================
# STAGE 1: Build the React Frontend
# ==============================================================================
FROM node:20-bookworm AS frontend-builder

WORKDIR /frontend

COPY swasthyaSampark/package*.json ./
RUN npm install

COPY swasthyaSampark/ ./

# Use relative URLs for all-in-one single-container deployment
ENV VITE_BACKEND_URL=""
ENV VITE_ML_URL=""

RUN npm run build

# ==============================================================================
# STAGE 2: Unified Container (Python ML + Node.js Backend + Static Frontend)
# ==============================================================================
FROM python:3.10-slim-bookworm

# Install Node.js 20 & required system utilities
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    gnupg \
    && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y --no-install-recommends nodejs \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# 1. Setup ML Microservice (FastAPI)
COPY 6ml/6ml/requirements.txt ./6ml/
RUN pip install --no-cache-dir -r ./6ml/requirements.txt
COPY 6ml/ ./6ml/

# 2. Setup Node.js Backend
COPY backend/package*.json ./backend/
RUN cd backend && npm install --omit=dev
COPY backend/ ./backend/

# 3. Copy built React Frontend assets from Stage 1
COPY --from=frontend-builder /frontend/dist ./frontend-dist

# 4. Copy Startup Script
COPY start.sh ./
RUN sed -i 's/\r$//' ./start.sh && chmod +x ./start.sh

# Koyeb default public port is 8000
EXPOSE 8000

CMD ["./start.sh"]
