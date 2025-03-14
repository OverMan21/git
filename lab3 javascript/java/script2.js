document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".gallery-image");
    const popup = document.getElementById("image-popup");
    const popupText = document.getElementById("image-info");
    const closeButton = document.querySelector(".close-button");

    images.forEach(img => {
        img.addEventListener("click", function () {
            popupText.textContent = img.getAttribute("data-info");
            popup.style.display = "block";
        });
    });

    closeButton.addEventListener("click", function () {
        popup.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});
