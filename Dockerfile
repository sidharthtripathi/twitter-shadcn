FROM node:lts-alpine3.18
WORKDIR /next
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm" , "run" , "dev"]
EXPOSE 3000
