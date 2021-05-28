FROM node:16.2-alpine

RUN mkdir /client
WORKDIR /client 

COPY ./client/package.json /client/
COPY ./client/yarn.lock /client/

RUN yarn install
