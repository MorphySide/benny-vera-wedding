
// ============================
// AOS
// ============================

AOS.init({
    duration: 1000,
    once: true
});


// ============================
// HUJAN BUNGA
// ============================

const flowerContainer =
document.querySelector('.flowers-container');

function createFlower(){

    if(!flowerContainer) return;

    const flower =
    document.createElement('div');

    flower.classList.add('flower');

    flower.innerHTML = '🌸';

    flower.style.left =
        Math.random() * 100 + 'vw';

    flower.style.animationDuration =
        (Math.random() * 5 + 5) + 's';

    flower.style.opacity =
        Math.random();

    flowerContainer.appendChild(flower);

    setTimeout(()=>{
        flower.remove();
    },10000);

}

const flowerInterval =
setInterval(createFlower,300);


// ============================
// BUKA UNDANGAN
// ============================

function openInvitation(){

    localStorage.setItem('opened','true');

    document.getElementById('content')
        .style.display='block';

    document.querySelector('.hero')
        .style.display='none';

    // HENTIKAN HUJAN BUNGA

    clearInterval(flowerInterval);

    document.querySelector('.flowers-container')
        ?.remove();

    // TAMPILKAN BACKGROUND

    document.body.classList.add(
        'content-opened'
    );

    // TAMPILKAN ORNAMENT

    document.querySelector('.main-ornament')
        .style.display='block';

    // MUSIK

    document.getElementById('music')
        .play()
        .catch(()=>{});

}


// ============================
// SAAT HALAMAN DIBUKA
// ============================

window.onload = function(){

    if(localStorage.getItem('opened')
        === 'true'){

        document.getElementById('content')
            .style.display='block';

        document.querySelector('.hero')
            .style.display='none';

        document.body.classList.add(
            'content-opened'
        );

        document.querySelector('.main-ornament')
            .style.display='block';

        document.querySelector('.flowers-container')
            ?.remove();
    }

    // NAMA TAMU

    const params =
        new URLSearchParams(
            window.location.search
        );

    const guest =
        params.get('to');

    if(guest){

        document.getElementById(
            'guestName'
        ).innerHTML = decodeURIComponent(
            guest
        );

    }

};


// ============================
// COUNTDOWN
// ============================

const weddingDate =
new Date(
    "July 05, 2026 09:00:00"
).getTime();


setInterval(function(){

    const now =
        new Date().getTime();

    const distance =
        weddingDate - now;

    const days =
        Math.floor(
            distance /
            (1000*60*60*24)
        );

    const hours =
        Math.floor(
            (distance %
            (1000*60*60*24))
            /
            (1000*60*60)
        );

    const minutes =
        Math.floor(
            (distance %
            (1000*60*60))
            /
            (1000*60)
        );

    const seconds =
        Math.floor(
            (distance %
            (1000*60))
            /
            1000
        );

    const countdown =
        document.getElementById(
            'countdown'
        );

    if(countdown){

        countdown.innerHTML = `

        <div class="time-box">
            <div class="number">
                ${days}
            </div>
            <div>Hari</div>
        </div>

        <div class="time-box">
            <div class="number">
                ${hours}
            </div>
            <div>Jam</div>
        </div>

        <div class="time-box">
            <div class="number">
                ${minutes}
            </div>
            <div>Menit</div>
        </div>

        <div class="time-box">
            <div class="number">
                ${seconds}
            </div>
            <div>Detik</div>
        </div>

        `;
    }

},1000);
