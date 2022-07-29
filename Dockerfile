FROM node:14.17.3-buster
WORKDIR /src

COPY . . 
RUN npm install 


CMD ["npm", "start"]