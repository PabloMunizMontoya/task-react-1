import React, { useState, useEffect } from "react";

import "../Details/details.css"

import { useParams } from 'react-router-dom'
// un hook de react router dom que toma el parámetro de la url y lo puedo usar para lo que quiera, como URLSearchParams que usábamos en js vanilla para capturar datos de la url.

export default function Details() {

    const { id } = useParams()
    // asi usamos el hook useParams: desestructuramos el parámetro que usamos en el enrrutador correspondiente a details, en este caso es id, como se puede observar en el index del router { path: '/details/:id', element: <Details />}.
    console.log(id)
    // como se puede ver en consola esto me trae el di de cada manga seleccionado en details.
    
    const [manga, setManga] = useState({})
    // variable useState para contener la info de mangas.json. en este caso en particular no vamos a traer todos los mangas si no un solo manga y no es un array si no un objeto. por eso ahora cambiamos el nombre a mnga y el valor a setManga.

    useEffect(() => {
        fetch ('/manga.json')
            .then(res => res.json())
            .then(data => {
                setManga(data.find(element => element.id === id))
                // aca usamos el método find para encontrar el primer elemento que coincida con el id desestructurado en el parámetro. y devolver el objeto correspondiente a ese id, en el setManga.  
                console.log(data.find(element => element.id === id))
            })
            .catch(err => console.log(err))
    },[])
    // uso el fetch para traer la hoja de datos .json y agregarla al valor de la variable use state setMangas.

    return (
    <>
        <h1>DETALLE</h1>
        <h2>de cada comic/manga</h2>
        <div className="details-container fade">
        <img className="details-img" src={manga.photo} alt={manga.id} />
        <p className="details-title">{manga.title}</p>
        <p className="details-text">{manga.category_id}</p>
        </div>
    </>
    )
    // mostramos en details el render de cada manga que corresponde al id. magna es ese objeto que se obtuvo modificando la variable use state a traves del find en el fetch.
}
