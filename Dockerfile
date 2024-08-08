# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /myapp

# Copy package.json and package-lock.json if available
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on (change 3000 to the appropriate port if necessary)
EXPOSE 3000

# Define the command to run the application
CMD ["npm", "start"]
