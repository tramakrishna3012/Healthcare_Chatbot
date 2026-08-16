FROM python:3.10-slim

WORKDIR /app

# Copy requirements and install
COPY 6ml/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy all files
COPY 6ml/ ./

# Expose FastAPI port
EXPOSE 8000

# Run FastAPI server
CMD ["python", "server.py"]
