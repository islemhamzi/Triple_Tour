# Use official Node.js image (alternative variant)
FROM node:18-bullseye

# Set working directory inside container
WORKDIR /app

# Copy dependency files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all backend code
COPY . .

# Expose the port from .env (5000)
EXPOSE 5000

# Start the app
CMD ["npm", "run", "start"]
