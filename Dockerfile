FROM node:lts-alpine 
RUN npm install -g create-react-app
WORKDIR /app
COPY package.json /app
RUN yarn install
COPY . /app
CMD ["yarn", "run", "start"]
