FROM node:18
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY prisma ./prisma
COPY . .
COPY tsconfig.json ./
RUN npx prisma migrate
RUN npx prisma generate
CMD ["npm", "run", "start:build"]
