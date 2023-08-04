# Definir la imagen base de Node.js (asegúrate de elegir la versión adecuada para tu proyecto)
FROM node:18.16

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app/frontend

# Copiar el código fuente de tu proyecto backend al contenedor (asegúrate de tener el código fuente en la misma ubicación que este Dockerfile)
COPY frontend/ /app/frontend

# Instalar las dependencias de Node.js
RUN npm install

# Exponer el puerto en el que escucha tu aplicación backend (asegúrate de que coincida con el puerto que escucha tu servidor Node.js)
EXPOSE 5173

# Comando para ejecutar la aplicación backend dentro del contenedor (asegúrate de que este comando coincida con la forma en que ejecutas tu aplicación Node.js)
CMD ["npm", "start"]
