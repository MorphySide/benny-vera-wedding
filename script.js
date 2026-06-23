// ===============================
// AOS ANIMATION
// ===============================

AOS.init({
    duration: 1500,
    once: false
});

// ===============================
// BUKA UNDANGAN
// ===============================

function openInvitation() {

    // Tampilkan isi undangan
    document.getElementById('content').style.display = 'block';

    // Scroll ke isi undangan
    document.getElementById('content').scrollIntoView({
        behavior: 'smooth'
    });

    // Putar musik
    const music = document.getElementById('music');

    music.play().catch(function (err) {
        console.log(err);
    });

}

// ===============================
// COUNTDOWN
// ===============================

const weddingDate = new Date("July 05, 2026 09:00:00").getTime();

const countdown = setInterval(function () {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    const countdownElement = document.getElementById('countdown');

    if (countdownElement) {

        countdownElement.innerHTML = `
            <div class="time-box">
                <span class="number">${days}</span>
                <span class="label">Hari</span>
            </div>

            <div class="time-box">
                <span class="number">${hours}</span>
                <span class="label">Jam</span>
            </div>

            <div class="time-box">
                <span class="number">${minutes}</span>
                <span class="label">Menit</span>
            </div>

            <div class="time-box">
                <span class="number">${seconds}</span>
                <span class="label">Detik</span>
            </div>
        `;
    }

    if (distance < 0) {

        clearInterval(countdown);

        countdownElement.innerHTML =
            "<h3>Acara Sedang Berlangsung</h3>";
    }

}, 1000);


// ===============================
// ANIMASI BUNGA JATUH
// ===============================

const flowersContainer = document.querySelector('.flowers');

function createFlower() {

    if (!flowersContainer) return;

    const flower = document.createElement('div');

    flower.classList.add('flower');

    const icons = ['🌸', '🌺', '🌷', '💮'];

    flower.innerHTML =
        icons[Math.floor(Math.random() * icons.length)];

    flower.style.left =
        Math.random() * 100 + 'vw';

    flower.style.animationDuration =
        (Math.random() * 5 + 5) + 's';

    flower.style.fontSize =
        (Math.random() * 15 + 18) + 'px';

    flowersContainer.appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, 10000);

}

setInterval(createFlower, 500);


// ===============================
// PARALLAX EFFECT
// ===============================

window.addEventListener('scroll', function () {

    const scrollPosition = window.pageYOffset;

    document.querySelectorAll('.card').forEach(card => {

        card.style.transform =
            `translateY(${scrollPosition * 0.01}px)`;

    });

});
