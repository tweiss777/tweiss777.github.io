# Use the official Node.js image as base
FROM node:latest

# Set working directory
WORKDIR /app


# Install dependencies for client
WORKDIR /app/client
COPY client/package.json client/yarn.lock ./
RUN yarn install

# Build client
COPY client ./
RUN yarn build

# Reset working directory
WORKDIR /app
# figure how to run the client from the container
