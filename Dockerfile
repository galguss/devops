# בסיס – Node קליל
FROM node:20-bullseye

# תקיית העבודה בתוך הקונטיינר
WORKDIR /app

# קודם מעתיקים רק package*.json בשביל cache
COPY package*.json ./

# מתקינים תלותים
RUN npm install 

# עכשיו מעתיקים את שאר הקוד
COPY . .

# הפורט שהאפליקציה מאזינה עליו
EXPOSE 3000

# הפקודה שמפעילה את האפליקציה
CMD ["npm", "start"]
