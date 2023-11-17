# First stage: build the Angular project
FROM node:16-alpine AS build
WORKDIR /app
COPY . ./
RUN npm install
RUN npm run build

# Second stage: serve the static files with Nginx
FROM nginx:alpine
COPY --from=build /app/dist/summer-workshop-angular /usr/share/nginx/html
