
document.addEventListener("DOMContentLoaded", function() {
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 1.5s";
    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 100);
});


document.getElementById("toggleTheme").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});


document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("mouseover", () => {
        link.style.color = "yellow";
    });
    link.addEventListener("mouseout", () => {
        link.style.color = "white";
    });
});


window.onload = function() {
    alert("Bine ai venit în lumea The Witcher 3!");
};
