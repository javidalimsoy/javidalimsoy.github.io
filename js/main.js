const burger = document.getElementById("burger");
const fullscreenNav = document.getElementById("fullscreen-nav");
const closeBtn = document.getElementById("close-nav");

// Open fullscreen nav
burger.addEventListener("click", () => {
    burger.classList.add("active");
    fullscreenNav.classList.add("active");
    document.body.style.overflow = "hidden";

    const links = fullscreenNav.querySelectorAll("li");
    links.forEach((link, index) => {
        link.style.opacity = "0";
        link.style.animation = "fadeInMenu 0.4s ease forwards";
        link.style.animationDelay = `${0.1 * (index + 1)}s`;
    });
});

// Close fullscreen nav
function closeMenu() {
    fullscreenNav.classList.remove("active");
    burger.classList.remove("active");
    document.body.style.overflow = "auto";
}

closeBtn.addEventListener("click", closeMenu);

document.querySelectorAll("#fullscreen-nav a").forEach(link => {
    link.addEventListener("click", closeMenu);
});
