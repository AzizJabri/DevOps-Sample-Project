FROM node:18.14-slim


WORKDIR /user/src/app


COPY ./package.json ./


RUN npm install

COPY . .

EXPOSE 3000

#starting the server
CMD ["npm", "start"]