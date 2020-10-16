FROM node:lts-alpine

ARG NODE_ENV=development
ENV NODE_ENV=$NODE_ENV

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN if [ "$NODE_ENV" = "development" ]; \
	then npm install;  \
	else npm install --only=production; \
	fi

RUN npm install -g sequelize-cli

# Bundle app source
COPY . .