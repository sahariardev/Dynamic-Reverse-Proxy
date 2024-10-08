FROM node:18


# Set environment variables with default values
ENV REVERSE_PROXY_SERVER_PORT=443
ENV REVERSE_PROXY_CONFIG_SERVER_PORT=7002

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --production

COPY . .

# Expose the environment variable ports
EXPOSE $REVERSE_PROXY_SERVER_PORT
EXPOSE $REVERSE_PROXY_CONFIG_SERVER_PORT

# Command to start the Node.js app
CMD ["npm", "start"]