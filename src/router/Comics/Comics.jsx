import React, { useState, useEffect } from "react";
// importamos los hooks useState, useEffect del doom react.

import { Link as Anchor } from 'react-router-dom'
// importamos el link y lo renombramos 

import '../Comics/comics.css'

// función que exporta mi info de Comics.
export default function Comics() {

    const [mangas, setMangas] = useState([])
    // variable useState para contener la info de mangas.json.

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch ('./manga.json')
            .then(res => res.json())
            .then(data => {
                setMangas(data)
                console.log(mangas)
            })
            .catch(err => console.log(err))
    },[])
    // useEffect mas fetch de mangas.json para traer la hoja de datos.


  return (
    <>
        <h1>todos los comics</h1>
            <h2>con un link hacia la página de detalle</h2>

            {
                categories?.map(category => <p>{category.name}</p>)
            }

        <div className="comics-container fade">
        {mangas?.map(manga =>{
            return (
                <div key={manga.id} className="comics-card">
                    <Anchor to= {`/details/${manga.id}`}> <img className="comics-img" src={manga.photo} alt={manga.id}  /></Anchor>
                    <p className="comics-text">{manga.title}</p>
                    <p className="comics-text" >{manga.category_id}</p>
                </div>
            )
        })}    
        </div>
        
        {/* retorna un array mapeada desde la hoja de datos mangas.json con solo los títulos de los mangas, el signo de interrogación es para que la info este disponible solo si se encuentra, esto es por el useEffect, le da tiempo al hook de hacer su trabajo y luego renderiza. el key después del p es para eliminar el error de los array mapeados ya que react necesita que tras este método cada dato tenga un id. */}
        {/* el key se pone en el primer elemento en este caso el div, el div es necesario ya que no solo queremos retornar un hijo si no varios elementos, a la imagen le agregamos un Anchor que hace referencia a el link, este anchor dirige hacia una ruta establecida con un id de cada imagen ya que es una pagina que hace referencia al detalle de cada comic, el id ligado a la imagen hace que esto pase */}
        {/* la ruta especificada en el Ancho luego la tenemos que poner en el index.js del router, y de esta forma queda el anchor funcional por cada imagen que nos dirige a la pagina de details. */}
    </>
)
}
