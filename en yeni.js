// Mobile menu
const menuToggle = document.querySelector(".menu-toggle");
const navUl = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
    navUl.classList.toggle("show");
});

// Smooth scroll
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Start button
document.getElementById("startBtn").addEventListener("click", () => {
    document.getElementById("cards").scrollIntoView({ behavior: "smooth" });
});

// Card click
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("active");
    });
});

// Grid click
document.querySelectorAll(".box").forEach(box => {
    box.addEventListener("click", () => {
        box.classList.toggle("clicked");
    });
});

// Contact form
document.getElementById("sendBtn").addEventListener("click", () => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let msg = document.getElementById("msg");

    if (name === "" || email === "" || message === "") {
        msg.style.color = "red";
        msg.textContent = "Bütün sahələri doldur!";
    } else {
        msg.style.color = "green";
        msg.textContent = "Mesaj göndərildi!";
    }
});

// Dark mode
document.getElementById("darkMode").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});