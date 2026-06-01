const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write(`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Dashboard Kelompok 2</title><script src="https://cdn.tailwindcss.com"></script><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet"><style>body{font-family:'Inter',sans-serif;}</style></head><body class="bg-slate-50 text-slate-800">`);
    
    res.write(`
        <nav class="bg-white border-b border-emerald-100 px-6 py-4 flex justify-between items-center shadow-sm">
            <div class="flex items-center gap-3">
                <div class="bg-emerald-600 text-white px-3 py-1.5 rounded-lg font-bold text-lg">K2</div>
                <span class="font-semibold text-lg tracking-tight">Cloud Management</span>
            </div>
            <div>
                <span class="text-sm bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full font-medium border border-emerald-200">System Online</span>
            </div>
        </nav>
    `);

    res.write(`
        <main class="max-w-7xl mx-auto px-4 py-10">
            <div class="bg-gradient-to-r from-emerald-800 to-teal-950 text-white p-8 rounded-2xl shadow-md mb-10">
                <span class="text-emerald-300 text-sm font-semibold uppercase tracking-wider">Tugas Kelompok 2</span>
                <h1 class="text-3xl font-bold mt-2">Implementasi DevOps & CI/CD Pipeline di Cloud</h1>
                <p class="mt-3 text-emerald-100/90 text-sm leading-relaxed">Aplikasi Node.js Express ini berhasil dikemas menggunakan Docker dan diluncurkan secara otomatis dari GitHub menuju infrastruktur Cloud secara real-time.</p>
            </div>
    `);

    res.write(`
            <div class="bg-white rounded-xl border border-slate-100 shadow-sm p-6 sm:p-8">
                <h2 class="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4 mb-6">Anggota Kelompok 2 & Peran</h2>
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="bg-slate-50 text-slate-500 text-xs font-semibold uppercase border-b border-slate-100">
                                <th class="py-3 px-4">Nama Mahasiswa</th>
                                <th class="py-3 px-4">Fokus Tugas / Peran</th>
                            </tr>
                        </thead>
                        <tbody class="text-sm divide-y divide-slate-100">
                            <tr><td class="py-4 px-4 font-medium text-slate-900">Cindy Auliya Rahma</td><td class="py-4 px-4 text-slate-600">Cloud Architecture & CI/CD Setup</td></tr>
                            <tr><td class="py-4 px-4 font-medium text-slate-900">Muhammad Khairi Lubis</td><td class="py-4 px-4 text-slate-600">Docker Containerization (Dockerfile)</td></tr>
                            <tr><td class="py-4 px-4 font-medium text-slate-900">Rangga Permana Sanjaya</td><td class="py-4 px-4 text-slate-600">Frontend UI/UX Optimization</td></tr>
                            <tr><td class="py-4 px-4 font-medium text-slate-900">Arif Maulana</td><td class="py-4 px-4 text-slate-600">Backend API Development</td></tr>
                            <tr><td class="py-4 px-4 font-medium text-slate-900">M Hafiz Juanda</td><td class="py-4 px-4 text-slate-600">Cloud Configuration & Env Management</td></tr>
                            <tr><td class="py-4 px-4 font-medium text-slate-900">Yuverman Gea</td><td class="py-4 px-4 text-slate-600">Quality Assurance & Deployment Testing</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    `);

    res.write(`<footer class="text-center py-8 text-xs text-slate-400 bg-white mt-20 border-t border-slate-100">&copy; 2026 Kelompok 2 - Tugas Teknologi Cloud Computing.</footer></body></html>`);
    res.end();
});

app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});
