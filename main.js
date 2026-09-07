/* ═══════════════════════════════════════════════════════
   SOPHY AWALIAH — PORTFOLIO JAVASCRIPT
   ═══════════════════════════════════════════════════════

   CARA MENAMBAHKAN GAMBAR PROYEK:
   Setiap proyek memiliki array "images" yang berisi objek:
     { src: "path/ke/gambar.jpg", caption: "Keterangan gambar" }

   Anda bisa menambahkan 1–3 gambar per proyek.
   Jika src dikosongkan (""), maka akan tampil placeholder.
   ═══════════════════════════════════════════════════════ */

const PROJECTS = [
  {
    title: "Weather Prediction",
    sub: "Machine Learning · Python · 2024",
    images: [
      { src: "", caption: "Screenshot 1 — tambahkan gambar di sini" },
      { src: "", caption: "Screenshot 2 — tambahkan gambar di sini" },
      { src: "", caption: "Screenshot 3 — tambahkan gambar di sini" },
    ]
  },
  {
    title: "Klasifikasi Hipertensi",
    sub: "Data Analysis · Healthcare · 2025",
    images: [
      { src: "img/Klasifikasi1.png", caption: "Tampilan Hasil Klasifikasi" },
      { src: "img/Klasifikasi2.png", caption: "Tampilan Hasil Klasifikasi" },
      // { src: "Klasifikasi3.png", caption: "Tampilan Hasil Klasifikasi" },
    ]
  },
  {
    title: "Web Album & Merch K-Pop Seventeen",
    sub: "PHP · MySQL · 2023",
    images: [
      { src: "img/Album1.png", caption: "Antarmuka Website" },
      { src: "img/Album2.png", caption: "Halaman Katalog Album" },
      { src: "img/Album3.png", caption: "Halaman Detail Merchandise" },
      { src: "img/Album4.png", caption: "Halaman Tentang Kami" },
      { src: "img/Album5.png", caption: "Halaman Contact Us" },
      
    ]
  },
  {
    title: "Web Pemesanan Bis",
    sub: "PHP · MySQL · 2023",
    images: [
      { src: "img/BlueBird1.jpg", caption: "Antarmuka Website" },
      { src: "img/BlueBird2.jpg", caption: "Panel Admin - Melihat Data Bis" },
      { src: "img/BlueBird3.jpg", caption: "Panel Admin - Input Data Bis" },
      { src: "img/BlueBird4.jpg", caption: "Panel Admin - Edit Data Bis" },
      { src: "img/BlueBird5.jpg", caption: "Panel Admin - Menghapus Data Bis" },
      { src: "img/BlueBird6.jpg", caption: "Katalog Bis Tersedia" },
      { src: "img/BlueBird7.jpg", caption: "Katalog Bis Tersedia" },
      { src: "img/BlueBird8.jpg", caption: "Halaman Penyewaan Bis untuk Customer" },
      { src: "img/BlueBird9.jpg", caption: "Halaman Registrasi" },
      { src: "img/BlueBird10.jpg", caption: "Halaman Login" },
    ]
  },
  {
    title: "Wireframe Aplikasi Mobile Merchandise",
    sub: "Flutter · Mobile · 2024",
    images: [
      { src: "img/Mobile1.jpg", caption: "Tampilan Wireframe App" },
      { src: "img/Mobile2.jpg", caption: "Tampilan Wireframe App" },
      { src: "img/Mobile3.jpg", caption: "Tampilan Wireframe App" },
      { src: "img/Mobile4.jpg", caption: "Tampilan Wireframe App" },
      { src: "img/Mobile5.jpg", caption: "Tampilan Wireframe App" },
      { src: "img/Mobile6.jpg", caption: "Tampilan Wireframe App" },
      { src: "img/Mobile7.jpg", caption: "Tampilan Wireframe App" },
      { src: "img/Mobile8.jpg", caption: "Tampilan Wireframe App" },
    ]
  },
  {
    title: "Aplikasi Prediksi Cuaca",
    sub: "Python · API · Mobile · 2024",
    images: [
      { src: "", caption: "Screenshot 1 — tambahkan gambar di sini" },
      { src: "", caption: "Screenshot 2 — tambahkan gambar di sini" },
    ]
  },
  {
    title: "Tempat Sampah Otomatis IoT",
    sub: "IoT · Sensor Ultrasonik · 2025",
    images: [
      { src: "img/TSO1.jpeg", caption: "Penyerahan Tempat Sampah Otomatis kepada Bpk Kepala Desa Badak Mekar" },
      { src: "img/TSO2.png", caption: "Proyek Individu KKN Tempat Sampah Otomatis Berbasis Sensor Ultrasonik" },
    ]
  },
  {
    title: "Analisis Curah Hujan GSMaP",
    sub: "Python · Remote Sensing · 2025",
    images: [
      { src: "img/Grafik1.png", caption: "Grafik Data Satelit CHRIPS" },
      { src: "img/Grafik2.png", caption: "Grafik Ground Station (Data Pos Pengamat)" },
      { src: "img/Grafik3.png", caption: "Grafik Data Satelit GSMaP" },
    ]
  },
];

document.querySelectorAll('.project-thumb').forEach((thumb) => {
  const project = PROJECTS[Number(thumb.closest('.project-item').dataset.index)];
  const firstImage = project?.images.find((image) => image.src);

  if (!firstImage) return;

  const image = document.createElement('img');
  image.src = firstImage.src;
  image.alt = firstImage.caption || project.title;
  thumb.insertBefore(image, thumb.firstChild);
});

/* ─── LIGHTBOX STATE ─────────────────────────────── */
let lbCurrentProject = -1;
let lbCurrentSlide   = 0;

function openLightbox(index) {
  const proj = PROJECTS[index];
  if (!proj) return;

  lbCurrentProject = index;
  lbCurrentSlide   = 0;

  // Set header
  document.getElementById('lb-title').textContent = proj.title;
  document.getElementById('lb-sub').textContent   = proj.sub;

  // Build slides
  const imagesEl = document.getElementById('lb-images');
  imagesEl.innerHTML = '';

  proj.images.forEach((img, i) => {
    const slide = document.createElement('div');
    slide.className = 'lb-slide' + (i === 0 ? ' active-slide' : '');
    slide.dataset.idx = i;

    const wrap = document.createElement('div');
    wrap.className = 'lb-img-wrap';

    if (img.src) {
      const el = document.createElement('img');
      el.src = img.src;
      el.alt = img.caption || proj.title;
      wrap.appendChild(el);
    } else {
      const ph = document.createElement('div');
      ph.className = 'lb-img-placeholder';
      ph.innerHTML = `<span>◈</span><span>Gambar ${i + 1} — ganti src di main.js</span>`;
      wrap.appendChild(ph);
    }

    const cap = document.createElement('p');
    cap.className = 'lb-caption';
    cap.textContent = img.caption || '';

    slide.appendChild(wrap);
    slide.appendChild(cap);
    imagesEl.appendChild(slide);
  });

  // Build dots
  const dotsEl = document.getElementById('lb-dots');
  dotsEl.innerHTML = '';
  proj.images.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'lb-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Slide ${i + 1}`);
    dot.onclick = () => lbGoTo(i);
    dotsEl.appendChild(dot);
  });

  updateNavButtons(proj.images.length);
  document.getElementById('lightbox').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
  document.body.style.overflow = '';
}

function closeLightboxOutside(e) {
  if (e.target === document.getElementById('lightbox')) closeLightbox();
}

function lbNav(dir) {
  const proj = PROJECTS[lbCurrentProject];
  if (!proj) return;
  const total = proj.images.length;
  lbGoTo((lbCurrentSlide + dir + total) % total);
}

function lbGoTo(idx) {
  const proj = PROJECTS[lbCurrentProject];
  if (!proj) return;

  const slides = document.querySelectorAll('.lb-slide');
  const dots   = document.querySelectorAll('.lb-dot');

  slides.forEach(s => s.classList.remove('active-slide'));
  dots.forEach(d => d.classList.remove('active'));

  if (slides[idx]) slides[idx].classList.add('active-slide');
  if (dots[idx])   dots[idx].classList.add('active');

  lbCurrentSlide = idx;
  updateNavButtons(proj.images.length);
}

function updateNavButtons(total) {
  document.getElementById('lb-prev').disabled = lbCurrentSlide === 0;
  document.getElementById('lb-next').disabled = lbCurrentSlide === total - 1;
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  const lb = document.getElementById('lightbox');
  if (!lb.classList.contains('active')) return;
  if (e.key === 'Escape')      closeLightbox();
  if (e.key === 'ArrowLeft')   lbNav(-1);
  if (e.key === 'ArrowRight')  lbNav(1);
});

/* ─── NAV SCROLL ─────────────────────────────────── */
const navbar = document.getElementById('navbar');

/* ─── THEME TOGGLE ───────────────────────────────── */
const themeToggle = document.querySelector('.theme-toggle');
const savedTheme = localStorage.getItem('portfolio-theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
  document.body.classList.add('dark-mode');
}

function updateThemeToggle() {
  const isDark = document.body.classList.contains('dark-mode');
  themeToggle.setAttribute('aria-pressed', String(isDark));
  themeToggle.setAttribute('aria-label', isDark ? 'Aktifkan mode terang' : 'Aktifkan mode gelap');
}

updateThemeToggle();

themeToggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-mode');
  localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
  updateThemeToggle();
});

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);

  // Active link highlight
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-links a');
  let current    = '';

  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });

  links.forEach(a => {
    const href = a.getAttribute('href');
    a.style.color = href === '#' + current ? 'var(--accent)' : '';
  });
});

/* ─── MOBILE MENU ────────────────────────────────── */
document.querySelector('.nav-toggle').addEventListener('click', () => {
  navbar.classList.toggle('menu-open');
});

document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => navbar.classList.remove('menu-open'));
});

/* ─── SCROLL REVEAL ──────────────────────────────── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 70);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));