FROM node:16.18.0-alpine3.16 AS build
WORKDIR /build/
ADD package.json /build/
ADD src /build/src/
RUN npm install
ADD angular.json /build/
ADD tsconfig.json /build/
ADD tsconfig.app.json /build/
RUN ls -al 
RUN npm run ng build -- --configuration production


FROM nginx:1.23.2-alpine AS final
EXPOSE 8080
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /build/dist/*  /usr/share/nginx/html
COPY /setup.sh /docker-entrypoint.d
RUN chmod +x /docker-entrypoint.d/setup.sh


## add permissions for nginx user
RUN chown -R nginx:nginx /usr/share/nginx/html
RUN chmod -R 755 /usr/share/nginx/html
RUN chown -R nginx:nginx /var/cache/nginx
RUN chown -R nginx:nginx /var/log/nginx
RUN chown -R nginx:nginx /etc/nginx/conf.d
RUN touch /var/run/nginx.pid
RUN chown -R nginx:nginx /var/run/nginx.pid

USER nginx


ARG BUILD_TERELEASE=TEST
ENV TERELEASE=$BUILD_TERELEASE