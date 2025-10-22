FROM node:16-alpine3.18 as build-stage

WORKDIR /app

COPY . /app

RUN npm install

RUN npm run build

FROM nginx:1.15
COPY --from=build-stage /app/build/ /usr/share/nginx/html
COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
