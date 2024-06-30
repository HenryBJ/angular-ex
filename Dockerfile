FROM node:18.19.1 as build

WORKDIR /app

RUN npm install -g @angular/cli

COPY package.json package-lock.json ./

RUN npm install

COPY . ./

RUN ng build --configuration production

FROM nginx:latest
COPY --from=build /app/dist/angular-ex/browser /usr/share/nginx/html

EXPOSE 80
