FROM node:22-alpine3.20 as builder
WORKDIR /app
COPY . /app
RUN npm i
RUN npm run build

FROM python:3.13.2-slim
WORKDIR /app/
COPY --from=builder /app/dist /app
EXPOSE 8080
CMD ["python3", "-m", "http.server", "8080"]
