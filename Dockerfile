FROM node:17

# Working Dir
WORKDIR /src

# Copy Package Json Files
COPY package*.json ./

# Install Files
RUN npm install

# Copy Src Files
COPY . .

#Expose the API Port
EXPOSE 8080

CMD [ "node", "src/index.js"]