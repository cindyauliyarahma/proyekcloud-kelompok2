const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
        <div style="text-align: center; margin-top: 50px; font-family: Arial, sans-serif;">
            <h1>🚀 Proyek Cloud Computing Kelompok 2 🚀</h1>
            <p>Aplikasi ini berhasil di-deploy otomatis menggunakan <b>CI/CD Pipeline</b>!</p>
            <p>Status: <span style="color: green; font-weight: bold;">ONLINE</span></p>
        </div>
    `);
});

app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});
