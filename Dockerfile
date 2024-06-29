FROM node:latest as build

WORKDIR /app

RUN npm install -g @angular/cli

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN ng build --configuration production

FROM nginx:latest
COPY --from=build /app/dist/angular-ex /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
