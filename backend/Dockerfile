FROM node:18-alpine3.17

WORKDIR /app

COPY package.json .

RUN npm install --save-dev

RUN npm install --save

COPY ./ ./

CMD ["npm", "run", "dev"]