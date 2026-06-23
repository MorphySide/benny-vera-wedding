function openInvitation() {
    document.getElementById("content").style.display = "block";

    // Scroll ke konten
    document.getElementById("content").scrollIntoView({
        behavior: "smooth"
    });

    // Putar musik
    let music = document.getElementById("music");
    music.play();
}

// Countdown
const weddingDate = new Date("July 05, 2026 09:00:00").getTime();

const countdown = setInterval(function () {

    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60))
        / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60))
        / 1000);

    document.getElementById("timer").innerHTML =
        days + " Hari " +
        hours + " Jam " +
        minutes + " Menit " +
        seconds + " Detik";

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("timer").innerHTML =
            "Acara Sedang Berlangsung";
    }

}, 1000);

// Animasi bunga jatuh

const flowersContainer = document.querySelector('.flowers');

function createFlower(){

    const flower = document.createElement('div');

    flower.classList.add('flower');

    flower.innerHTML = '🌸';

    flower.style.left = Math.random() * 100 + 'vw';

    flower.style.animationDuration =
        (Math.random() * 5 + 5) + 's';

    flower.style.fontSize =
        (Math.random() * 20 + 15) + 'px';

    flowersContainer.appendChild(flower);

    setTimeout(() => {
        flower.remove();
    },10000);
}

setInterval(createFlower,500);
