
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
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '0px'
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '0px'
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


//video lazy load
document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('.lazy');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const video = entry.target;
                const source = video.querySelector('source');
                const progressCircle = video.closest('.video-item').querySelector('.progress-circle');

                if (source.getAttribute('data-src')) {
                    // Cache video source
                    caches.open('video-cache').then(cache => {
                        cache.match(source.getAttribute('data-src')).then(response => {
                            if (!response) {
                                cache.add(source.getAttribute('data-src'));
                            }
                        });
                    });

                    source.src = source.getAttribute('data-src');
                    video.load();
                    observer.unobserve(video);
                }

                // Mostrar la barra de progreso
                progressCircle.style.opacity = 1;

                const checkBuffer = () => {
                    if (video.buffered.length > 0) {
                        const bufferedEnd = video.buffered.end(video.buffered.length - 1);
                        const duration = video.duration;
                        if (duration > 0) {
                            const percentage = (bufferedEnd / duration) * 100;
                            if (percentage >= 10) { // Umbral para comenzar a reproducir (10% buffer)
                                video.play();
                                progressCircle.style.opacity = 0; // Ocultar la barra de progreso cuando comienza la reproducción
                                clearInterval(bufferCheckInterval);
                            }
                        }
                    }
                };

                // Verificar el buffer cada 500ms hasta que el video comience a reproducirse
                const bufferCheckInterval = setInterval(checkBuffer, 500);

                video.addEventListener('canplay', () => {
                    // Reproducir automáticamente cuando puede reproducirse
                    video.play();
                });

                video.addEventListener('playing', () => {
                    // Ocultar la barra de progreso cuando el video está reproduciéndose
                    progressCircle.style.opacity = 0;
                    clearInterval(bufferCheckInterval);
                });

                video.addEventListener('error', () => {
                    progressCircle.style.opacity = 0;
                    console.error('Error loading video:', video.currentSrc);
                    clearInterval(bufferCheckInterval);
                });

                video.addEventListener('ended', () => {
                    video.currentTime = 0; // Reset video to the beginning
                    video.play(); // Play again for looping effect
                    video.pause(); // Pause to prevent continuous buffering
                    video.load(); // Reload to clear buffer
                });

                video.muted = true; // Mute the video
                video.loop = true; // Loop the video
            }
        });
    }, { threshold: 0.25 });

    videos.forEach(video => {
        observer.observe(video);
    });
});
