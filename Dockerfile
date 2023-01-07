FROM node:19-alpine3.16
WORKDIR /tikal-teste
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm run build