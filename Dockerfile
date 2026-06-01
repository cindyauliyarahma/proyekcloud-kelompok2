# Gunakan Node.js versi resmi sebagai base image
FROM node:18-alpine

# Tentukan folder kerja di dalam kontainer
WORKDIR /usr/src/app

# Salin package.json terlebih dahulu untuk instalasi modul
COPY package*.json ./

# Instal semua dependensi (express, dll)
RUN npm install

# Salin seluruh kode proyek (termasuk server.js) ke dalam kontainer
COPY . .

# Buka port yang digunakan aplikasi
EXPOSE 3000

# Perintah utama untuk menjalankan aplikasi Anda (Pastikan mengarah ke server.js!)
CMD ["node", "server.js"]
