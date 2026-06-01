const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Dashboard Kelompok 2 - DevOps & CI/CD</title>
            <!-- Tailwind CSS CDN -->
            <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
            <!-- Google Fonts: Inter -->
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
            <style>
                body { font-family: 'Inter', sans-serif; }
            </style>
        </head>
        <body class="bg-slate-50 text-slate-800">

            <!-- Top Navbar -->
            <nav class="bg-white border-b border-emerald-100 px-6 py-4 flex justify-between items-center shadow-xs">
                <div class="flex items-center gap-3">
                    <div class="bg-emerald-600 text-white p-2 rounded-lg font-bold text-lg shadow-sm">K2</div>
                    <span class="font-semibold text-lg tracking-tight">Cloud Management</span>
                </div>
                <div class="flex items-center gap-4">
                    <span class="text-sm bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full font-medium flex items-center gap-1.5 border border-emerald-200">
                        <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        Production Environment
                    </span>
                </div>
            </nav>

            <!-- Main Container -->
            <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                
                <!-- Hero Section / Header -->
                <div class="bg-gradient-to-r from-emerald-800 to-teal-950 text-white p-8 rounded-2xl shadow-md mb-10 relative overflow-hidden">
                    <div class="relative z-10 max-w-2xl">
                        <span class="text-emerald-300 text-sm font-semibold tracking-wider uppercase">Tugas Kelompok 2</span>
                        <h1 class="text-3xl font-bold mt-2 sm:text-4xl">Implementasi DevOps & CI/CD Pipeline di Cloud</h1>
                        <p class="mt-3 text-emerald-100/90 text-sm sm:text-base leading-relaxed">
                            Aplikasi Node.js Express ini berhasil dikemas menggunakan Docker dan diluncurkan secara otomatis dari GitHub menuju infrastruktur Cloud secara real-time.
                        </p>
                    </div>
                    <div class="absolute right-0 bottom-0 translate-x-10 translate-y-10 opacity-10 text-[180px] font-bold select-none">
                        ☁️
                    </div>
                </div>

                <!-- Metric Cards Grid -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <!-- Card 1 -->
                    <div class="bg-white p-6 rounded-xl border border-slate-100 shadow-xs flex items-center justify-between">
                        <div>
                            <p class="text-xs font-medium text-slate-400 uppercase tracking-wider">Deployment Status</p>
                            <h3 class="text-2xl font-bold text-emerald-600 mt-1">ONLINE</h3>
                        </div>
                        <div class="bg-emerald-50 text-emerald-600 p-3 rounded-lg">⚡</div>
                    </div>
                    <!-- Card 2 -->
                    <div class="bg-white p-6 rounded-xl border border-slate-100 shadow-xs flex items-center justify-between">
                        <div>
                            <p class="text-xs font-medium text-slate-400 uppercase tracking-wider">Infrastructure</p>
                            <h3 class="text-2xl font-bold text-slate-800 mt-1">Railway Cloud</h3>
                        </div>
                        <div class="bg-teal-50 text-teal-600 p-3 rounded-lg">☁️</div>
                    </div>
                    <!-- Card 3 -->
                    <div class="bg-white p-6 rounded-xl border border-slate-100 shadow-xs flex items-center justify-between">
                        <div>
                            <p class="text-xs font-medium text-slate-400 uppercase tracking-wider">Runtime Environment</p>
                            <h3 class="text-2xl font-bold text-slate-800 mt-1">Node.js (Express)</h3>
                        </div>
                        <div class="bg-blue-50 text-blue-600 p-3 rounded-lg">📦</div>
                    </div>
                </div>

                <!-- Content Section -->
                <div class="bg-white rounded-xl border border-slate-100 shadow-xs p-6 sm:p-8">
                    <h2 class="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4 mb-6">Anggota Kelompok 2 & Peran</h2>
                    
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse">
                            <thead>
                                <tr class="bg-slate-50 text-slate-500 text-xs font-semibold uppercase border-b border-slate-100">
                                    <th class="py-3 px-4">Nama Mahasiswa</th>
                                    <th class="py-3 px-4">Fokus Tugas / Peran</th>
                                    <th class="py-3 px-4">Status Kontribusi</th>
                                </tr>
                            </thead>
                            <tbody class="text-sm divide-y divide-slate-100">
                                <tr>
                                    <td class="py-4 px-4 font-medium text-slate-900">Cindy Aulia Rahma</td>
                                    <td class="py-4 px-4 text-slate-600">Cloud Architecture & CI/CD Setup</td>
                                    <td class="py-4 px-4"><span class="bg-emerald-50 text-emerald-700 text-xs px-2.5 py-1 rounded-sm font-medium">Active</span></td>
                                </tr>
                                <tr>
                                    <td class="py-4 px-4 font-medium text-slate-900">Muhammad Khairi Lubis</td>
                                    <td class="py-4 px-4 text-slate-600">Docker Containerization (Dockerfile)</td>
                                    <td class="py-4 px-4"><span class="bg-emerald-50 text-emerald-700 text-xs px-2.5 py-1 rounded-sm font-medium">Active</span></td>
                                </tr>
                                <tr>
                                    <td class="py-4 px-4 font-medium text-slate-900">Rangga Permana Sanjaya</td>
                                    <td class="py-4 px-4 text-slate-600">Frontend UI/UX Optimization</td>
                                    <td class="py-4 px-4"><span class="bg-emerald-50 text-emerald-700 text-xs px-2.5 py-1 rounded-sm font-medium">Active</span></td>
                                </tr>
                                <tr>
                                    <td class="py-4 px-4 font-medium text-slate-900">Arif Maulana</td>
                                    <td class="py-4 px-4 text-slate-600">Backend API Development</td>
                                    <td class="py-4 px-4"><span class="bg-emerald-50 text-emerald-700 text-xs px-2.5 py-1 rounded-sm font-medium">Active</span></td>
                                </tr>
                                <tr>
                                    <td class="py-4 px-4 font-medium text-slate-900">M Hafiz Juanda</td>
                                    <td class="py-4 px-4 text-slate-600">Cloud Configuration & Env Management</td>
                                    <td class="py-4 px-4"><span class="bg-emerald-50 text-emerald-700 text-xs px-2.5 py-1 rounded-sm font-medium">Active</span></td>
                                </tr>
                                <tr>
                                    <td class="py-4 px-4 font-medium text-slate-900">Yuverman Gea</td>
                                    <td class="py-4 px-4 text-slate-600">Quality Assurance & Deployment Testing</td>
                                    <td class="py-4 px-4"><span class="bg-emerald-50 text-emerald-700 text-xs px-2.5 py-1 rounded-sm font-medium">Active</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </main>

            <footer class="text-center py-8 text-xs text-slate-400 border-t border-slate-100 bg-white mt-20">
                &copy; 2026 Kelompok 2 - Tugas Teknologi Cloud Computing. All Rights Reserved.
            </footer>

        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(\`Server berjalan di port \${PORT}\`);
});
