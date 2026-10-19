// =================== TÙY CHỈNH NHANH ===================
// Đặt nhạc của bạn vào assets/music/our-song.mp3.
// Đặt ảnh vào assets/images/our-photo.jpg và memory-1.jpg, memory-2.jpg, memory-3.jpg.
// Có thể sửa lời chúc trực tiếp trong index.html.
// =======================================================

const music = document.getElementById('backgroundMusic');
const musicButton = document.getElementById('musicButton');
const musicLabel = document.getElementById('musicLabel');
const musicIcon = document.getElementById('musicIcon');
const soundButton = document.getElementById('soundButton');
const openCardButton = document.getElementById('openCard');
const envelope = document.getElementById('envelope');
const envelopeHint = document.getElementById('envelopeHint');
const loveLetter = document.getElementById('loveLetter');
const surpriseButton = document.getElementById('surpriseButton');
const surpriseMessage = document.getElementById('surpriseMessage');
const celebrateButton = document.getElementById('celebrateButton');
const heartsLayer = document.getElementById('hearts');
const toast = document.getElementById('toast');

let effectsEnabled = true;
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}

function makeHearts(amount = 18) {
  if (!effectsEnabled) {
    showToast('Hiệu ứng đang tắt rồi nè 💗');
    return;
  }
  const symbols = ['♥', '♡', '✦', '💗', '🌸'];
  for (let i = 0; i < amount; i++) {
    const heart = document.createElement('span');
    heart.className = 'heart-particle';
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.fontSize = `${14 + Math.random() * 22}px`;
    heart.style.animationDuration = `${3 + Math.random() * 4}s`;
    heart.style.animationDelay = `${Math.random() * .8}s`;
    heartsLayer.appendChild(heart);
    heart.addEventListener('animationend', () => heart.remove(), { once: true });
  }
}

async function toggleMusic() {
  if (music.paused) {
    try {
      await music.play();
      musicButton.classList.add('is-playing');
      musicButton.setAttribute('aria-pressed', 'true');
      musicIcon.textContent = '♫';
      musicLabel.textContent = 'Đang phát nhạc';
      showToast('Nhạc dành riêng cho công chúa đã bật 🎵');
    } catch (error) {
      showToast('Hãy thêm file assets/music/our-song.mp3 để phát nhạc nhé!');
    }
  } else {
    music.pause();
    musicButton.classList.remove('is-playing');
    musicButton.setAttribute('aria-pressed', 'false');
    musicLabel.textContent = 'Bật nhạc';
    musicIcon.textContent = '♫';
  }
}

musicButton.addEventListener('click', toggleMusic);
soundButton.addEventListener('click', () => {
  effectsEnabled = !effectsEnabled;
  soundButton.textContent = effectsEnabled ? '♪' : '♩';
  soundButton.setAttribute('aria-label', effectsEnabled ? 'Tắt hiệu ứng' : 'Bật hiệu ứng');
  showToast(effectsEnabled ? 'Đã bật hiệu ứng lấp lánh ✨' : 'Đã tắt hiệu ứng chuyển động');
});

function openEnvelope() {
  const isOpen = envelope.classList.toggle('open');
  envelope.setAttribute('aria-expanded', String(isOpen));
  loveLetter.hidden = !isOpen;
  envelopeHint.textContent = isOpen ? 'Lá thư nhỏ đã mở. Đọc chậm thôi nha 💌' : 'Bấm vào phong thư để mở nha 💗';
  if (isOpen) {
    makeHearts(12);
    setTimeout(() => loveLetter.scrollIntoView({ behavior: 'smooth', block: 'center' }), 180);
  }
}
envelope.addEventListener('click', openEnvelope);
openCardButton.addEventListener('click', () => {
  document.getElementById('letter').scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => {
    if (!envelope.classList.contains('open')) openEnvelope();
  }, 450);
});

surpriseButton.addEventListener('click', () => {
  const isHidden = surpriseMessage.hidden;
  surpriseMessage.hidden = !isHidden;
  surpriseButton.innerHTML = isHidden ? 'Đóng bí mật <span class="arrow">↑</span>' : 'Mở bí mật <span class="arrow">→</span>';
  if (isHidden) {
    makeHearts(28);
    setTimeout(() => surpriseMessage.scrollIntoView({ behavior: 'smooth', block: 'center' }), 150);
  }
});

celebrateButton.addEventListener('click', () => {
  makeHearts(55);
  showToast('Gửi tiểu công chúa một trời yêu thương! 💖');
});

// Tự chạy hiệu ứng nhẹ khi người xem kéo xuống cuối trang.
let lastScrollEffect = 0;
window.addEventListener('scroll', () => {
  if (window.scrollY > 500 && Date.now() - lastScrollEffect > 12000) {
    lastScrollEffect = Date.now();
    if (effectsEnabled) makeHearts(5);
  }
}, { passive: true });
