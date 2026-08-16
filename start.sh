#!/bin/sh
set -e

echo "=== Starting Swasthya-Sampark All-in-One Deployment ==="

# Set internal port for Python ML service
export ML_PORT=8001
export INTERNAL_ML_URL="http://127.0.0.1:8001"

echo "1. Starting Python FastAPI ML Microservice on port ${ML_PORT}..."
cd /app/6ml/6ml
python server.py &
ML_PID=$!

echo "2. Starting Node.js Backend Server on port ${PORT:-8000}..."
cd /app/backend
export FRONTEND_DIST="/app/frontend-dist"

# Trap termination signals to shut down cleanly
trap "kill -TERM $ML_PID 2>/dev/null || true; exit 0" SIGINT SIGTERM

node server.js
