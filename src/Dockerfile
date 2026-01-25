# 1. Use an official Node runtime as a parent image
FROM node:18

# 2. Set the working directory in the container
WORKDIR /app

# 3. Copy package.json and package-lock.json to the container
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy the rest of your frontend code
COPY . .

# 6. Expose port 3000
EXPOSE 3000

# 7. Start the app
CMD ["npm", "start"]