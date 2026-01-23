FROM node:14
COPY . /app
WORKDIR /app
CMD ["node", "index.js"]
RUN useradd -m appuser
USER appuser