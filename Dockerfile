FROM node:8
WORKDIR /lib
COPY . /lib
CMD [ "node", "lib/app.js" ]
EXPOSE 8080