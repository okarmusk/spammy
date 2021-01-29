FROM node:14.15.4-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .
EXPOSE 587
EXPOSE 25

CMD [ "npm", "start"]
