FROM node:25-alpine AS build

WORKDIR /app

COPY package*.json yarn.lock ./
RUN yarn install

COPY . .

RUN yarn build
USER node

# nginx stage
FROM nginx:stable-alpine AS prod
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 3000
# Run nginx
CMD ["nginx", "-g", "daemon off;"]