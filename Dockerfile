FROM node:lts-alpine3.18

RUN mkdir /home/node/aset-auth
WORKDIR /home/node/aset-auth
COPY ./ .
EXPOSE 9057
CMD ["npm","run","dev"]
