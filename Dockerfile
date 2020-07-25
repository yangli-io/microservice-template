FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=prod

COPY . .

CMD ["npm", "start"]
