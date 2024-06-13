document.addEventListener('DOMContentLoaded', function() {
    var music = document.getElementById('background-music');
    music.play();
});

document.addEventListener('DOMContentLoaded', function() {
    var myCarousel = document.getElementById('carouselExampleIndicators');
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 2000, // Troca a cada 2 segundos
        wrap: true // Permite o loop contínuo do carousel
    });
});