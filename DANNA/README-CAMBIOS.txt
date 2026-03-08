INVITACION DIGITAL DE 15 ANOS
=============================

AJUSTES QUE PEDISTE
-------------------
- Musica en autoplay al entrar (con mejor intento automatico).
- Cada bloque ahora usa una imagen de fondo 9:16 distinta.
- Mas separacion visual entre bloques.
- Gif fijo superior e inferior, listos para reemplazar.
- Primer bloque sin textos extra: solo cuenta regresiva, fecha y "Desliza".
- Todos los iconos ahora son PNG para reemplazarlos facil.

IMPORTANTE SOBRE LA MUSICA
--------------------------
La plantilla YA intenta reproducir la musica automaticamente al abrir.
Pero en muchos celulares y navegadores dentro de WhatsApp, el audio con sonido
puede ser bloqueado hasta que la persona toque la pantalla. Por eso deje tambien
el boton flotante de musica.

ESTRUCTURA
----------
- index.html
- css/styles.css
- js/app.js
- assets/audio/musica-demo.wav
- assets/gif/top-banner.gif
- assets/gif/bottom-banner.gif
- assets/img/fondos/
- assets/img/fotos/
- assets/img/icons/

REEMPLAZAR TUS DISENOS 9:16
---------------------------
Cada bloque usa una imagen de fondo lista para que metas tu diseno vertical 9:16:
- assets/img/fondos/bloque-01-portada.png
- assets/img/fondos/bloque-02-invitacion.png
- assets/img/fondos/bloque-03-mosaico.png
- assets/img/fondos/bloque-04-fecha.png
- assets/img/fondos/bloque-05-hora.png
- assets/img/fondos/bloque-06-traje.png
- assets/img/fondos/bloque-07-ubicacion.png
- assets/img/fondos/bloque-08-sobres.png
- assets/img/fondos/bloque-09-rsvp.png

REEMPLAZAR FOTOS DEL MOSAICO
----------------------------
- assets/img/fotos/mosaico-1.png
- assets/img/fotos/mosaico-2.png
- assets/img/fotos/mosaico-3.png
- assets/img/fotos/mosaico-4.png

REEMPLAZAR GIFS
---------------
- assets/gif/top-banner.gif
- assets/gif/bottom-banner.gif

REEMPLAZAR ICONOS PNG
---------------------
- assets/img/icons/music-on.png
- assets/img/icons/music-off.png
- assets/img/icons/arrow-down.png
- assets/img/icons/calendar.png
- assets/img/icons/clock.png
- assets/img/icons/dress.png
- assets/img/icons/map-pin.png
- assets/img/icons/envelope.png
- assets/img/icons/whatsapp.png

CAMBIAR FECHA Y HORA
--------------------
Abre js/app.js y cambia:
const EVENT_DATE = "2026-04-26T18:00:00-05:00";

CAMBIAR WHATSAPP
----------------
Abre js/app.js y cambia:
const WHATSAPP_NUMBER = "573213207580";

CAMBIAR TEXTOS
--------------
Abre index.html y cambia los textos visibles.

CAMBIAR UBICACION DE GOOGLE MAPS
--------------------------------
En index.html cambia:
1) El titulo del lugar
2) El iframe del mapa
3) El enlace del boton "Abrir ubicacion"
