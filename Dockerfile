# VaultFlow AI — Multi-Stage Sovereign Container
FROM python:3.11-slim

WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Install Python backend requirements
COPY backend/requirements.txt /app/backend/
RUN pip install --no-cache-dir -r /app/backend/requirements.txt

# Copy application files
COPY . /app/

ENV PORT=10000
EXPOSE 10000

# Start unified Full-Stack Web Service (FastAPI + TabPFN API + Frontend)
CMD ["sh", "-c", "uvicorn backend.tabpfn_service:app --host 0.0.0.0 --port ${PORT:-10000}"]
