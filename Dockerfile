FROM node:latest
COPY /backend /backend
WORKDIR /backend
RUN npm install && npm audit fix && npm run start

FROM node:latest
COPY /frontend /frontend
WORKDIR /frontend
RUN npm install && npm audit fix && npm run dev
