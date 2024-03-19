FROM node:21-alpine
WORKDIR /app

# build
COPY package.json .
RUN npm install

# copy src
COPY . .

EXPOSE 3000
CMD ["npm", "run", "dev"]