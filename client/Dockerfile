FROM node:15.14-alpine

RUN mkdir /client
WORKDIR /client 

COPY ./client/package.json /client/
COPY ./client/yarn.lock /client/

RUN yarn install
