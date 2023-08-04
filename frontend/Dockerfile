FROM node:latest

COPY ./package*.json ./
RUN npm cache clean --force
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev"]
