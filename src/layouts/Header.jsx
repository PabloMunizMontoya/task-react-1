/* Importamos react y hook useState */
import React, { useState } from "react";


const Header = ({type,options}) => {
    /* Función que renderiza mi menu */

    const [variable, setVariable] = useState(false);
    /* función para cambiar variable, con destructuring, nombre de variable, setNombre de variable, le agregamos un  valor booleano inicial */

    const handleMenu = () => {
    //  Función para cambia el valor de la variable, si variable es true transformarla en false, de esta forma al clickear sobre el oneClick la variable cambia de valor de true a false y de false a true 

    // -----------------------------------------
    //     if (variable === true) {
    //         setVariable(false);
    //     }
    //     if (variable === false) {
    //         setVariable(true);
    //      } -esta es la forma extendida-
    //(control k + c para comentar asi el bloque)
        setVariable(!variable)
        // Forma corta de lo anterior
    };

    return (
        <header className = "header-container">
            {type === "variable" ?
                <a  onClick={handleMenu} className='header-button' >&#x2630;</a>:
                <a  onClick={handleMenu} className='header-button' >&#x2630;</a>
            }

            {variable ? (
                
                    <div className={`header-options-${type}`}>
              {options.map(option => <a href="" className='header-options'>{option.name}</a> )}
                </div>
                
            ) : null}
           
        
        </header>
    );
};
export default Header;
