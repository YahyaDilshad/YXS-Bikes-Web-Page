# Step 1: Node image use karo
FROM node:18

# Step 2: Container ke andar ek folder banao
WORKDIR /app

# Step 3: package.json copy karo aur dependencies install karo
COPY package*.json ./
RUN npm install

# Step 4: baaki code copy karo
COPY . .

# Step 5: Development server run karo
CMD ["npm", "run", "dev"]

# Step 6: Vite default port expose karo
EXPOSE 5173
