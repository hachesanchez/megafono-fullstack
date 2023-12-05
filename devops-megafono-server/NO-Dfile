FROM node:14
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 5005

# environment variables
# ENV MONGODB_URI=mongodb+srv://helenasangar:PrT2iWqWEX3qs9tp@elmegafono.vqqod4s.mongodb.net
# ENV TOKEN_SECRET=supersecret 
# ENV CLOUDINARY_URL=cloudinary://182936532268795:9HJoc_Dzhj_ZYtPSULsll5BAcRk@dhxbmco0b
# ENV CLOUDINARY_NAME=dhxbmco0b
# ENV CLOUDINARY_KEY=182936532268795
# ENV CLOUDINARY_SECRET=9HJoc_Dzhj_ZYtPSULsll5BAcRk

CMD ["npm", "start"]