import React from "react";

import "../Main/Mainn.css";

import Carousel from "../Carousel/Carousel";

const Nav = () => {
    return (
        <div>
            <div className="header">
                <div className="section">
                    <span>
                        Anunciamos nuestra próxima ronda de financiación.{" "}
                        <a>Leer más →</a>
                    </span>
                    <h1>Tu tienda de comics favorita</h1>
                    <p></p>
                    <a className="button-started" href="#main">
                        Empezar →{" "}
                    </a>
                </div>
            </div>
            <Carousel />
        </div>
    );
};

export default Nav;
