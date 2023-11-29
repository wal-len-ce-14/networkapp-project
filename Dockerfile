FROM node:latest

COPY ./ /app/

WORKDIR /app

RUN npm install && npm install ejs && npm cache clean --force

CMD node server.js
