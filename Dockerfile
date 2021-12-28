FROM node:16

WORKDIR /app

COPY . .

RUN npm install --production

EXPOSE 8080

CMD [ "node", "./lib/index.js" ]
