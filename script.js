// ===========================
// BUKA UNDANGAN + MUSIK
// ===========================

function openInvitation() {

    document.getElementById("content").style.display = "block";

    document.getElementById("content").scrollIntoView({
        behavior: "smooth"
    });

    let music = document.getElementById("music");

    music.play().catch(function(error){
        console.log("Autoplay diblokir browser");
    });

}


// ===========================
// COUNTDOWN
// ===========================

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

    const timer = document.getElementById("timer");

    if(timer){

        timer.innerHTML =
            days + " Hari<br>" +
            hours + " Jam<br>" +
            minutes + " Menit<br>" +
            seconds + " Detik";

    }

    if (distance < 0) {

        clearInterval(countdown);

        if(timer){
            timer.innerHTML = "Acara Sedang Berlangsung";
        }

    }

}, 1000);


// ===========================
// ANIMASI BUNGA JATUH
// ===========================

const flowersContainer = document.querySelector('.flowers');

function createFlower() {

    if(!flowersContainer) return;

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
        (Math.random() * 15 + 20) + 'px';

    flowersContainer.appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, 10000);

}

setInterval(createFlower, 500);


// ===========================
// EFEK MUNCUL SAAT SCROLL
// ===========================

window.addEventListener('scroll', function(){

    let scrollTop = window.pageYOffset;

    document.querySelectorAll('section').forEach(function(section){

        section.style.transform =
            'translateY(' + (scrollTop * 0.01) + 'px)';

    });

});
