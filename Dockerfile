# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Install npm dependencies
RUN npm install

# Bundle app source
COPY . .

# Expose the port on which the app runs
EXPOSE 3000

# Command to run the app
CMD [ "node", "index.js" ]
