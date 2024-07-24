
$(document).ready(function(){
    $('.carousel').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});





    const animationButton = document.querySelector('.nav-button:nth-child(1)'); // Selecciona el botón de ANIMACIÓN
    const firstGallery = document.getElementById('first-gallery'); // Selecciona la segunda galería

    animationButton.addEventListener('click', () => {
        const scrollPosition = firstGallery.offsetTop - 570; // Calcula la posición de desplazamiento restando 50px
        window.scrollTo({ top: scrollPosition, behavior: 'smooth' }); // Desplaza el scroll hasta la posición calculada de manera suave
    });



 const vfxButton = document.querySelector('.nav-button:nth-child(2)'); // Selecciona el botón de ANIMACIÓN
    const secondGallery = document.getElementById('second-gallery'); // Selecciona la segunda galería

    vfxButton.addEventListener('click', () => {
        const scrollPosition = secondGallery.offsetTop - 70; // Calcula la posición de desplazamiento restando 50px
        window.scrollTo({ top: scrollPosition, behavior: 'smooth' }); // Desplaza el scroll hasta la posición calculada de manera suave
    });



 const tvButton = document.querySelector('.nav-button:nth-child(3)'); // Selecciona el botón de ANIMACIÓN
    const terceraGallery = document.getElementById('tercera-gallery'); // Selecciona la segunda galería

    tvButton.addEventListener('click', () => {
        const scrollPosition = terceraGallery.offsetTop - 70; // Calcula la posición de desplazamiento restando 50px
        window.scrollTo({ top: scrollPosition, behavior: 'smooth' }); // Desplaza el scroll hasta la posición calculada de manera suave
    });


 const contactoButton = document.querySelector('.nav-button:nth-child(4)'); // Selecciona el botón de ANIMACIÓN
    const cuartaGallery = document.getElementById('cuarta-gallery'); // Selecciona la segunda galería

    contactoButton.addEventListener('click', () => {
        const scrollPosition = cuartaGallery.offsetTop - 70; // Calcula la posición de desplazamiento restando 50px
        window.scrollTo({ top: scrollPosition, behavior: 'smooth' }); // Desplaza el scroll hasta la posición calculada de manera suave
    });






    
    const menuButton = document.querySelector('.menu-button');
    const buttonContainer = document.querySelector('.button-container');

    menuButton.addEventListener('click', () => {
        buttonContainer.classList.toggle('open');
        menuButton.style.display = 'none'; // Oculta el botón MENÚ una vez que se hace clic en él
    });

