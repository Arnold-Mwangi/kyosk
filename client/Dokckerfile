# Stage 1: Build the app
FROM node:23.6.0 AS build

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the entire app into the container
COPY . .

# Build the app for production
RUN npm run build

# Stage 2: Serve the app in production
FROM node:23.6.0-slim

# Set working directory
WORKDIR /app

# Install production dependencies (optional for Next.js, since it's already built)
COPY --from=build /app/package.json /app/package-lock.json ./
RUN npm install --only=production

# Copy the built app from the build stage
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public

# Expose the port the app will run on
EXPOSE 3000

# Start the app in production mode
CMD ["npm", "start"]
