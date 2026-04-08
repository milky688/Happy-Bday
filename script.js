let slides = document.querySelectorAll(".slide");
let index = 0;

/* Auto slide only once */
function showSlides() {
    let delay;

    if (index === 0) delay = 5000; // 1st slide
    else if (index === 1) delay = 10000; // Special Quote (10 sec)
    else if (index === 2) delay = 5000; // Photos
    else delay = 5000; // Final

    if (index < slides.length - 1) {
        setTimeout(() => {
            slides[index].classList.remove("active");
            index++;
            slides[index].classList.add("active");
            showSlides();
        }, delay);
    }
}

showSlides();

/* Floating hearts */
setInterval(() => {
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}, 400);