FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy application files
COPY . .

# Expose backend port
EXPOSE 3001

# Start the application
CMD ["npm", "start"]
