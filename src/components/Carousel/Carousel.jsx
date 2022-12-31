// -------------  import --------------------

import React, { useState, useEffect } from "react";
// Importamos react y el hook de estado useState y useEffect

/* import mangas from "./../../scripts/manga"; */
// importamos el objeto mangas.js

import Slides from "./Slides";
// Importamos el slides

import "./carousel.css";

// -------- Generador de carousel ------------

export default function Carousel() {
    // Función para renderizar Carousel creada con el snippet rfc

    const [numero, setNumero] = useState(0);
    // variable de state
    const [id, setId] = useState(0);
    // variable de estado del id para que pueda cambiar, linea 33.
    const [mangas, setMangas] = useState([])
    // variable de estado que obtiene valor del fetch que trae  un archivo json, por eso tiene un array vació al final el useState

    useEffect(() => {
        fetch ('./manga.json')
            .then(res => res.json())
            .then(data => {
                setMangas(data)
                console.log(mangas)
            })
            .catch(err => console.log(err))
    },[])

    useEffect(() => {
        // función useEffect hook ( efecto secundario de react)nos sirve para cosas asíncronas o cosas que tengan que ver con el tiempo
        let idInterval = setInterval(() => {
            next();
        }, 3000);
        // ejecuta la función next de la linea 51 cada 3000 mili segundos
        setId(idInterval);
        // aca cambiamos el valor de la variable de estado setId por el valor de idInterval, entonces cada que el id cambia, cambia el valor de la varable de estado linea 21

            return clearInterval(id);
            // para que esto funcione cada vez que el intervalo se crea también lo tenemos que eliminar, para eso este return 
        }, [numero]);
        // cada vez que cambia el numero se ejecuta el setInterval, para eso es [numero], el useEffect tiene como argumentos una función que ejecuta en este caso es el setInterval y un array de ejecución [] si se deja vació se ejecuta una vez, en este caso como esta [numero] se ejecuta cada que numero cambia, numero es una variable de estado linea 19



    const prev = () => {
        if (numero > 0) {
            setNumero(numero - 1);
        } else {
            setNumero(mangas.length - 1);
        }
        // si el numero es mayor a 0 el valor de la variable al clickear se resta, si no el valor de la variable es el largo de mangas - 1
    };


    // Función que se ejecuta en el onClick, cambia el valor de la variable numero con cada click.
    const next = () => {
        if (numero < mangas.length - 1) {
            setNumero(numero + 1);
        } else {
            setNumero(mangas.length - mangas.length);
        }
        clearInterval(id)
        // borra el intervalo de la variable de estado setId para que no se sume a el useEffect linea 31
    };
    

    return (
        <div className="carousel-container">
            <a className="prev" onClick={prev}>
                &#10094;
            </a>
            {/* ejecuta funcion prev */}

            <Slides nombre={mangas[numero]?.title} foto={mangas[numero]?.photo} />
            {/* agrega el slide con sus propiedades y  */}

            <a className="next" onClick={next}>
                &#10095;
            </a>
            {/* ejecuta funcion next  */}
        </div>
    );
}
