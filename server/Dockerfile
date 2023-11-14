FROM node:16.13.1
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 5001
CMD [ "npm", "start" ]