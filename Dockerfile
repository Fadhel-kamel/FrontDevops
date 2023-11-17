# First stage: build the Angular project
FROM node:14-alpine AS build
WORKDIR /app
COPY . ./
RUN npm install 
RUN npm run build

# Second stage: serve the static files with Nginx
FROM nginx:alpine
COPY --from=build /app/dist/summer-workshop-angular /usr/share/nginx/html
