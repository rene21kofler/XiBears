FROM node:16-alpine3.15 
RUN yarn global add @gridsome/cli
EXPOSE 8000
WORKDIR /app
COPY . .
RUN yarn install
CMD ["yarn", "develop"]