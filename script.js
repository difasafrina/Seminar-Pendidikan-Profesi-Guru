/* Database Konten Refleksi 4C (Connection, Challenge, Concept, Change) */
const reflectionData = {
    'filosofi': {
        title: 'Filosofi Pendidikan Indonesia',
        connection: 'Memperkuat pandangan saya bahwa pendidikan adalah menuntun kodrat alam dan zaman anak, bukan memaksakan kehendak pendidik.',
        challenge: 'Tantangan dalam mengikis kebiasaan mengajar yang berfokus pada ketuntasan materi semata tanpa memperhatikan kemerdekaan belajar siswa.',
        concept: 'Konsep Sistem Among, Menuntun vs Memerintah, serta orientasi pembelajaran berpusat pada peserta didik (pro-student).',
        change: 'Mulai merancang kelas koding yang memberikan pilihan explorasi solusi projek sesuai minat dan daya tangkap siswa.'
    },
    'pemahaman': {
        title: 'Pemahaman Peserta Didik & Pembelajarannya',
        connection: 'Menyadarkan pentingnya mengidentifikasi karakteristik dan latar belakang peserta didik sebelum menyusun materi koding.',
        challenge: 'Menghadapi kelas heterogen di mana rentang kemampuan pemrograman awal siswa sangat jauh berbeda.',
        concept: 'Teori Perkembangan Kognitif, ZPD (Zone of Proximal Development), dan pentingnya asesmen diagnostik.',
        change: 'Rutin melakukan pemetaan gaya belajar dan membagi kelompok praktikum berdasarkan kombinasi kemampuan.'
    },
    'growth': {
        title: 'Growth Mindset dalam Pendidikan',
        connection: 'Meluruskan pandangan saya bahwa bakat koding bukan bawaan lahir, melainkan keterampilan yang terus bertumbuh lewat latihan.',
        challenge: 'Membangun kembali kepercayaan diri siswa yang merasa "tidak berbakat" saat menghadapi eror atau bug program.',
        concept: 'Praise for Effort vs Praise for Ability, Neuroplastisitas, dan konstruksi kegagalan sebagai batu pijakan belajar.',
        change: 'Mengubah pola umpan balik saya dari mengomentari nilai akhir menjadi mengapresiasi alur berpikir dan usaha siswa.'
    },
    'diferensiasi': {
        title: 'Pembelajaran Diferensiasi',
        connection: 'Memungkinkan saya merespons keanekaragaman siswa kelas PPLG tanpa ada yang tertinggal atau merasa bosan.',
        challenge: 'Manajemen waktu dan penyediaan bahan ajar yang bervariasi (konten, proses, produk) dalam satu sesi praktikum.',
        concept: 'Diferensiasi Konten, Proses, Produk, serta penyesuaian berdasarkan Kesiapan (Readiness) & Minat siswa.',
        change: 'Menyediakan starter code berjenjang (basic, intermediate, advanced) pada materi praktikum logika & pemrograman.'
    },
    'mendalam': {
        title: 'Pembelajaran Mendalam (UbD)',
        connection: 'Membantu saya menyusun skenario pembelajaran yang berfokus pada pemahaman konsep mendalam daripada hafalan sintaks.',
        challenge: 'Mengubah pola pikir merancang dari "aktivitas dulu" menjadi "tujuan & bukti asesmen dulu" (Backward Design).',
        concept: 'Understanding by Design (UbD), Essential Questions, dan 6 Dimensi Pemahaman Bermakna.',
        change: 'Selalu memulai bab praktikum dengan pertanyaan pemantik nyata yang relevan dengan aplikasi industri sehari-hari.'
    },
    'ppl1': {
        title: 'PPL Terbimbing di SMKN 13 Bandung',
        connection: 'Kesempatan menguji secara langsung teori-teori pedagogik yang dipelajari ke dalam dinamika kelas riil SMKN 13 Bandung.',
        challenge: 'Mengkondisikan kelas praktikum yang aktif sekaligus mengelola pengawasan individu saat siswa koding di komputer.',
        concept: 'Classroom Management, Real-time Mentoring, dan Evaluasi Praktik Mengajar bersama Guru Pamong & DPL.',
        change: 'Membuat aturan main praktikum yang jelas serta menerapkan alur scaffolding bertahap saat membimbing koding.'
    },
    'sem2_c1': {
        title: 'Projek Kepemimpinan (Semester 2)',
        connection: 'Menghubungkan peran guru sebagai agen perubahan di luar kelas melalui projek kolaboratif komunitas.',
        challenge: 'Mengordinasikan banyak pihak dan memastikan keberlanjutan dampak projek edukasi.',
        concept: 'Service Learning, Manajemen Projek Sosial, dan Kepemimpinan Instruksional.',
        change: 'Lebih proaktif mengambil inisiatif dan menguatkan komunikasi lintas disiplin.'
    },
    'sem2_c2': {
        title: 'PPL Mandiri (Semester 2)',
        connection: 'Melatih kemandirian penuh sebagai guru utama dalam mengelola kelas, kurikulum, dan asesmen.',
        challenge: 'Menjaga konsistensi kualitas pengajaran di tengah padatnya tugas administrasi dan bimbingan siswa.',
        concept: 'Autonomy in Teaching, Continuous Formative Assessment, dan Adaptive Classroom Management.',
        change: 'Melakukan penyesuaian skenario secara ad-hoc berdasarkan respon pemahaman siswa secara realtime.'
    },
    'sem2_c3': {
        title: 'Seminar PPG (Semester 2)',
        connection: 'Wadah refleksi komprehensif untuk merajut seluruh pengalaman belajar menjadi sebuah naskah portofolio utuh.',
        challenge: 'Menganalisis perkembangan kompetensi diri secara kritis dan jujur tanpa bias.',
        concept: 'Reflective Practice, Portfolio-based Assessment, dan Professional Teacher Identity.',
        change: 'Menjadikan refleksi tertulis sebagai kebiasaan rutin pasca-mengajar.'
    },
    'sem2_c4': {
        title: 'Elektif / Pembelajaran Berbasis Komunitas',
        connection: 'Menghubungkan materi keahlian PPLG dengan kebutuhan nyata industri software dan komunitas lokal.',
        challenge: 'Penyelarasan fleksibilitas teknologi yang cepat berubah dengan alur kurikulum formal.',
        concept: 'Industry-driven Learning, Project-based Learning, dan Community Engagement.',
        change: 'Mengintegrasikan peranti modern seperti Low-Code tools (FlutterFlow) dalam projek siswa.'
    }
};

/* Function Toggle Modal */
function openModal(courseKey) {
    const data = reflectionData[courseKey];
    if (!data) return;

    document.getElementById('modalTitle').innerText = data.title;
    
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <div class="c-item">
            <div class="c-label">1. CONNECTION (Kaitan dengan Peran Guru)</div>
            <div class="c-text">${data.connection}</div>
        </div>
        <div class="c-item">
            <div class="c-label">2. CHALLENGE (Tantangan Pembelajaran)</div>
            <div class="c-text">${data.challenge}</div>
        </div>
        <div class="c-item">
            <div class="c-label">3. CONCEPT (Konsep Utama yang Dipahami)</div>
            <div class="c-text">${data.concept}</div>
        </div>
        <div class="c-item">
            <div class="c-label">4. CHANGE (Perubahan Praktik Mengajar)</div>
            <div class="c-text">${data.change}</div>
        </div>
    `;

    const backdrop = document.getElementById('modalBackdrop');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const backdrop = document.getElementById('modalBackdrop');
    backdrop.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal on click backdrop or ESC key
document.getElementById('modalBackdrop').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
});
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
});

/* Mobile Nav Toggle */
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('active'));
});

/* Scroll Active Highlight & Sticky Navbar */
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-link');
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });

    // Back to top floating button
    if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});