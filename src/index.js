import img1 from './img/galeria-imagenes/1.jpg';
import img2 from './img/galeria-imagenes/2.jpg';
import img3 from './img/galeria-imagenes/3.jpg';
import img4 from './img/galeria-imagenes/4.jpg';
import img5 from './img/galeria-imagenes/5.jpg';
import img6 from './img/galeria-imagenes/6.jpg';
import img7 from './img/galeria-imagenes/7.jpg';
import img8 from './img/galeria-imagenes/8.jpg';
import img9 from './img/galeria-imagenes/9.jpg';
import img10 from './img/galeria-imagenes/10.jpg';
import img11 from './img/galeria-imagenes/11.jpg';
import img12 from './img/galeria-imagenes/12.jpg';
import img13 from './img/galeria-imagenes/13.jpg';
import img14 from './img/galeria-imagenes/14.jpg';


const button = document.querySelectorAll(".punto")
const videos_intro = document.querySelector(".intro-videos")
const video_intro = videos_intro.querySelectorAll("video");

// arr.forEach(function callback(currentValue, index, array) {
//     // tu iterador
// }[, thisArg]);
//Para que el carrusel de los videos y cada vez que presionas el boton se
//se detiene el video.
button.forEach((e, i) => {
    button[i].addEventListener('click', () => {
        let position = i;
        let operacion_cambio = position * (-50);
        videos_intro.style.transform = `translateX(${operacion_cambio}%)`;
        video_intro.forEach((e) => {
            e.pause();
            e.currentTime = 0;
        })
    })

})

//Codigo para la galeria
const galeria = document.querySelector(".galeria-container");
const flecha_prev = galeria.querySelector(".prev");
const flecha_next = galeria.querySelector(".next");
const galeria_img = document.querySelector(".galeria-imagenes-carrusel");
const flechas = [flecha_prev, flecha_next];
// console.log(flechas)

flechas.forEach((e, i) => {
    flechas[i].addEventListener('click', () => {
        let position = i;
        if (position == 0) {
            galeria_img.scrollLeft -= galeria_img.offsetWidth;
        }
        if (position == 1) {
            galeria_img.scrollLeft += galeria_img.offsetWidth;
        }

    })
})

//Codigo para el model
const imagenes = [
    // { img: './src/img/galeria-imagenes/1.jpg' },
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14
]

let ctn_modal = 0;
const galeria_imagenes = document.querySelectorAll('.imagenes img');
const model = document.querySelector('.model');
const btn_cerrar = document.querySelector('.btn-cerrar');
const model_img = document.querySelector('.container-model img');

Array.from(galeria_imagenes).forEach(img => {
    img.addEventListener('click', ev => {
            const img_seleccionada = +ev.target.dataset.imgMostrar;
            model.style.visibility = 'visible';
            model.style.opacity = 1;
            model_img.setAttribute("src", imagenes[img_seleccionada]);

        }

    )
})

btn_cerrar.addEventListener('click', () => {
    model.style.visibility = 'hidden';
    model.style.opacity = 0;
})