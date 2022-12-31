
/* ---------- Imports ---------- */

import React, {useRef} from "react";
import imgCarousel1 from "./../../assets/images/carouselcomic1.jpg";
import imgCarousel2 from "./../../assets/images/carouselcomic2.jpg";
import imgCarousel3 from "./../../assets/images/carouselcomic3.jpg";
import imgCarousel4 from "./../../assets/images/carouselcomic4.jpg";
import { ReactComponent as FlechaIzquierda } from "./../../assets/images/iconmonstr-caret-left-lined.svg";
import { ReactComponent as FlechaDerecha } from "./../../assets/images/iconmonstr-caret-right-lined.svg";
import styled from "styled-components";


/* ------------ Slide ---------- */


const Slideshow = () => {

    const slideshow = useRef(null)

    const siguinete = () => {
        /*  comprobamos que el slide tiene elementos */
        if(slideshow.current.children.length > 0) {

            /* obtenemos el primer elemento del slideshow  */
            const firstElement = slideshow.current.children[0];

            /* Establecemos la transición para el slideshow */
            slideshow.current.style.transition = `900ms ease-out all`;

            /* Buscamos el tamaño del slideshow */
            const weightSlide = slideshow.current.children[0].offsetWidth;

            /* Movemos el slideShow, en función de su tamaño total */
            slideshow.current.style.transform = `translateX(-${weightSlide}px)`;

            const transition = () => {

            /* Reiniciamos la posicion del slideshow */
            slideshow.current.style.transition = 'none';
            slideshow.current.style.transform = `translateX(0)`;

            /* Tomamos el primer elemento y lo mandamos al final */
            slideshow.current.appendChild(firstElement)

            }

            /* Eventlisttener para cuando termina la transición */
            slideshow.current.addEventListener('transitionend', transition )

            
            
        }
    }
    
    const anterior = () => {
        console.log(slideshow.current)
    }
    return (
        <SlideContainer>
            <SlideShowContainer ref={slideshow}>
                <Slide>
                    <a href="#">
                        <img src={imgCarousel1} />
                    </a>
                </Slide>
                <Slide>
                    <a href="#">
                        <img src={imgCarousel2} />
                    </a>
                </Slide>
                <Slide>
                    <a href="#">
                        <img src={imgCarousel3} />
                    </a>
                </Slide>
                <Slide>
                    <a href="#">
                        <img src={imgCarousel4} />
                    </a>
                </Slide>
            </SlideShowContainer>
            <Controls>
                <Button onClick={anterior} >
                <FlechaIzquierda />
                </Button>
                <Button onClick={siguinete}>
                    <FlechaDerecha />
                </Button>
            </Controls>
        </SlideContainer>
    );
};


/* ------------- Style components ---------------- */


const SlideContainer = styled.div`
    position: relative;
    height: 70vh;


`;


const SlideShowContainer = styled.div`
    display: flex; 
    flex-wrap: nowrap;
    height: 100vh;
`;
const Slide = styled.div`
    min-width: 100%;
    overflow: hidden;
    transition: .3s ease all;
    max-height: 700px;
    height: 80vh;
    position: relative;
    z-index: 10;

    img{
        width:100%;
        vertical-align: top;
    }
`
const Controls = styled.div`
    position: absolute;
    top: 0;
    z-index: 20;
    width: 100vw;
    height:80vh;
    border: solid;
    display: flex;
    justify-content: space-between;
    align-items: center;
    pointer-events: none;

`

const Button = styled.div `
  width: 10vw;
  pointer-events: all;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  transition: .3s ease all;
`

/* --------------- export ------------- */

export default Slideshow;
