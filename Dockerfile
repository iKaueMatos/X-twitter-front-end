FROM node

WORKDIR /twitterclonefront

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

ENV PORT 3000

EXPOSE $PORT

CMD ["yarn", "start"]