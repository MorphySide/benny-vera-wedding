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
