
function changeImage() {
    var image = document.getElementById('largeImage');
    if (image.src.includes("bacc.jpg")) {
        image.src = "C:/Users/vladi/Desktop/web/str.jpg"; 
    } else {
        image.src = "C:/Users/vladi/Desktop/web/bacc.jpg"; 
    }
}


document.getElementById('largeImage').addEventListener('click', changeImage);


document.getElementById('sideImage').addEventListener('click', function() {
    this.style.transform = 'rotate(20deg)';
    setTimeout(() => {
        this.style.transform = 'rotate(0deg)';
    }, 300); 
});
