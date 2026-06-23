// =============================
// AOS ANIMATION
// =============================

AOS.init({
    duration: 1200,
    once: false
});


// =============================
// BUKA UNDANGAN
// =============================

function openInvitation() {

    document.getElementById('content').style.display = 'block';

    document.getElementById('content').scrollIntoView({
        behavior: 'smooth'
    });

    const music = document.getElementById('music');

    music.play().catch(function(error){
        console.log(error);
    });
}


// =============================
// NAMA TAMU OTOMATIS
// contoh:
// ?to=Yogi Rinaldi
// =============================

window.onload = function () {

    const params = new URLSearchParams(window.location.search);

    const guest = params.get('to');

    if (guest) {
        document.getElementById('guestName').innerHTML =
            decodeURIComponent(guest.replace(/\+/g, ' '));
    }

};


// =============================
// COUNTDOWN
// =============================

const weddingDate = new Date("July 05, 2026 09:00:00").getTime();

const countdown = setInterval(function () {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    document.getElementById('countdown').innerHTML = `

        <div class="time-box">
            <div class="number">${days}</div>
            <div>Hari</div>
        </div>

        <div class="time-box">
            <div class="number">${hours}</div>
            <div>Jam</div>
        </div>

        <div class="time-box">
            <div class="number">${minutes}</div>
            <div>Menit</div>
        </div>

        <div class="time-box">
            <div class="number">${seconds}</div>
            <div>Detik</div>
        </div>

    `;

    if (distance < 0) {

        clearInterval(countdown);

        document.getElementById('countdown').innerHTML =
            "<h3>Acara Sedang Berlangsung</h3>";
    }

}, 1000);


// =============================
// BUNGA BERJATUHAN
// =============================

const flowersContainer = document.querySelector('.flowers');

function createFlower() {

    const flower = document.createElement('div');

    flower.classList.add('flower');

    const flowers = ['🌸', '🌺', '🌷', '💮'];

    flower.innerHTML =
        flowers[Math.floor(Math.random() * flowers.length)];

    flower.style.left = Math.random() * 100 + 'vw';

    flower.style.fontSize =
        Math.random() * 15 + 20 + 'px';

    flower.style.animationDuration =
        Math.random() * 5 + 6 + 's';

    flowersContainer.appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, 10000);
}

setInterval(createFlower, 700);


// =============================
// BUKU TAMU SEDERHANA
// =============================

const rsvpButton = document.querySelector('.rsvp button');

if (rsvpButton) {

    rsvpButton.addEventListener('click', function () {

        const nama =
            document.querySelector('.rsvp input').value;

        const ucapan =
            document.querySelector('.rsvp textarea').value;

        if (nama === '' || ucapan === '') {

            alert('Silakan isi nama dan ucapan.');

            return;
        }

        alert(
            'Terima kasih ' +
            nama +
            ' atas doa dan ucapannya ❤️'
        );

        document.querySelector('.rsvp input').value = '';
        document.querySelector('.rsvp textarea').value = '';

    });

}
