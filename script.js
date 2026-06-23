```javascript
// =========================
// INISIALISASI AOS
// =========================

AOS.init({
    duration: 1000,
    once: true
});

// =========================
// BUKA UNDANGAN
// =========================

function openInvitation() {

    // simpan status sudah dibuka
    localStorage.setItem('opened', 'true');

    // tampilkan isi undangan
    document.getElementById('content').style.display = 'block';

    // sembunyikan cover
    document.querySelector('.hero').style.display = 'none';

    // putar musik
    const music = document.getElementById('music');

    music.play().catch(function(error){
        console.log(error);
    });

    // scroll ke atas
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// =========================
// CEK SAAT HALAMAN DIBUKA
// =========================

window.onload = function(){

    // jika sudah pernah membuka
    if(localStorage.getItem('opened') === 'true'){

        document.getElementById('content').style.display = 'block';

        document.querySelector('.hero').style.display = 'none';
    }

    // mengambil nama tamu dari URL
    // contoh:
    // ?to=Yogi Rinaldi

    const params = new URLSearchParams(window.location.search);

    const guest = params.get('to');

    if(guest){

        document.getElementById('guestName').innerHTML =
            decodeURIComponent(guest);
    }

};


// =========================
// COUNTDOWN
// =========================

const weddingDate =
new Date("July 05, 2026 09:00:00").getTime();

setInterval(function(){

    const now = new Date().getTime();

    const distance = weddingDate - now;

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

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

    const countdown =
        document.getElementById('countdown');

    if(countdown){

        countdown.innerHTML = `

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
    }

}, 1000);


// =========================
// SCROLL HALUS
// =========================

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener('click', function(e){

        e.preventDefault();

        document.querySelector(
            this.getAttribute('href')
        ).scrollIntoView({

            behavior: 'smooth'

        });

    });

});
```
