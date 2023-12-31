FROM node:18
WORKDIR /app
COPY package*.json ./
RUN yarn install --production
COPY . .
RUN yarn global add @nestjs/cli
RUN yarn build
EXPOSE 3000
CMD [ "node", "dist/main.js" ]