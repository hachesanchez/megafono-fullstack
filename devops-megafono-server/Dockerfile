FROM node:14
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 5005
ENV MONGODB_URI=mongodb+srv://helenasangar:PrT2iWqWEX3qs9tp@elmegafono.vqqod4s.mongodb.net
CMD ["npm", "start"]