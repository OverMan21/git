
function changeImage() {
    var image = document.getElementById('mainImage');
    if (image.src.includes("combat1.jpg")) {
        image.src = "C:/Users/vladi/Desktop/web/arm.png"; 
    } else {
        image.src = "C:/Users/vladi/Desktop/web/combat1.jpg"; 
    }
}
