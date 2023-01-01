/* in this section all the items are rendered */

import './App.css';

import {router} from './router';


import { RouterProvider} from 'react-router-dom'
// importo el componente que inyecta las rutas a la app. el componente lee el enrrutador y renderiza las vistas definidas.

function App() {
    return (
        <RouterProvider router={ router } />
    );
}

export default App;
