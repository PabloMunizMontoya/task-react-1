// router : carpeta que va a contener TODOS los componentes que renderiza paginas por ejemplo : home, comics,aboutUs, signIn.
// index.js va a funcionar como carrutador, en base a la URl que lee: renderiza una pagina o la que corresponda.

import Main from "../components/Main/Main";

import Details from "../router/Details/Details";

import Comics from "../router/Comics/Comics";

import Layout from "../layouts/Layouts"

import { createBrowserRouter } from "react-router-dom";
// importar un constructor de rutas

// variable que contiene mi enrrutador principal, este método creador de rutas requiere un array con todas las rutas de la aplicación.

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/home", element: <Main /> },
            // defino dentro del array todas las rutas de mi enrrutador, a traves de dos elementos path : la ruta propiamente dicha y el elemento a renderizar.

            { path: "/comics", element: <Comics /> },
            { path: "/details/:id", element: <Details /> }
            // ruta para ir a details de cada Comics, nótese el enrrutamiento con Id, ya que el id es necesario para mostrar el detail de cada Comics, vease la explicación en Comics.jsx
        ]
    },

]);


