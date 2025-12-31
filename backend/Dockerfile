# Etapa 1: usar imagem base do Node.js
FROM node:18

# Diretório de trabalho no container
WORKDIR /app

# Copia arquivos de dependência e instala pacotes
COPY package*.json ./
RUN npm install

# Copia o restante dos arquivos da aplicação
COPY . .

# Define variável de ambiente (ajustável)
ENV NODE_ENV=production

# Expõe a porta (a mesma usada no app.listen)
EXPOSE 3000

# Comando para iniciar o app
CMD [ "npm", "start" ]
