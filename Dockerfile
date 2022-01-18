FROM node:16

WORKDIR /app

COPY . .

RUN npm install --production

EXPOSE 80

ENV NODE_DEBUG 'trace'
ENV NODE_ENV 'production'

CMD [ "node", "index.js" ]
