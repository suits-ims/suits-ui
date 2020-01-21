FROM node:12.7-alpine AS build
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build --prod

FROM nginx:1.17.1-alpine
COPY --from=build /usr/src/app/dist/suits-ui /usr/share/nginx/html
COPY docker/.tools/nginx/nginx.conf /etc/nginx/conf.d/default.conf
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
