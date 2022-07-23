FROM node:14.17.3-buster

ENV ADB_IP="192.168.1.42"
WORKDIR /src

COPY package.json /src/package.json
COPY package-lock.json /src/package-lock.json
RUN npm install 

COPY . . 
CMD ["npm", "start"]