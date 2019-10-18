FROM node:alpine

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm install react-scripts -g --silent
RUN npm install axios
COPY . .

CMD ["npm", "start"]
