FROM node:16

WORKDIR /app

COPY . .

RUN npm install --production

EXPOSE 8080

ENV NODE_DEBUG 'trace'

CMD [ "node", "index.js" ]
