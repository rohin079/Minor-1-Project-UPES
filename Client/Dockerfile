# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

COPY public/ /app/public
COPY src/ /app/src
COPY package.json /app/

# Install application dependencies
RUN npm install

# Define the command to start your application
CMD ["npm", "start"]
