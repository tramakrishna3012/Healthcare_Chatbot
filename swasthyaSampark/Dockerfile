# Stage 1: Build React/Vite app
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Pass build-time environment variables
ARG VITE_BACKEND_URL
ARG VITE_ML_URL
ARG VITE_GOOGLE_CLIENT_ID
ARG VITE_ZEGO_APP_ID
ARG VITE_ZEGO_SERVER_SECRET

ENV VITE_BACKEND_URL=$VITE_BACKEND_URL
ENV VITE_ML_URL=$VITE_ML_URL
ENV VITE_GOOGLE_CLIENT_ID=$VITE_GOOGLE_CLIENT_ID
ENV VITE_ZEGO_APP_ID=$VITE_ZEGO_APP_ID
ENV VITE_ZEGO_SERVER_SECRET=$VITE_ZEGO_SERVER_SECRET

RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
