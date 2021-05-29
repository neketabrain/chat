FROM node:16.2-alpine

RUN mkdir /server
WORKDIR /server 

COPY ./server/package.json /server/
COPY ./server/yarn.lock /server/

RUN yarn install
