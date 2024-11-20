# Stage 1 : Backend
FROM node:20.14 as backend
WORKDIR /backend
COPY backend/package*.json ./
RUN npm install && npm audit fix
COPY backend/. .

# Stage 2 : Frontend
FROM node:20.14 as frontend
WORKDIR /frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/. .
EXPOSE 5173

# Stage 3 : App
FROM node:20.14 AS app
WORKDIR /app
COPY --from=frontend /frontend ./frontend
COPY --from=backend /backend ./backend
COPY ./run-app.sh ./
CMD ["bash", "run-app.sh"]

