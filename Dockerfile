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

EXPOSE 8000
EXPOSE 3000

# Start lightweight static file server + TabPFN microservice
CMD ["sh", "-c", "python -m http.server 3000 --directory /app & python /app/backend/tabpfn_service.py"]
