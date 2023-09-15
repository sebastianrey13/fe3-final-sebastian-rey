import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useContext } from 'react';
import { ContextGlobal } from './utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

function Navbar() {

    const { theme, toggleTheme } = useContext(ContextGlobal);

    const navbarClass = `${theme}`;



    return (
        <nav className={navbarClass}>
            <h2><span className='tituloD'>D</span>H Odonto</h2>
            {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
            {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}

            <div className='menuNav'>
                <ul className='ulNav'>
                    <li>
                        <Link to='/home'>Home</Link>
                    </li>
                    <li>
                        <Link to='/contacto'>Contacto</Link>
                    </li>
                    <li>
                        <Link to='/favs'>Favoritos</Link>
                    </li>
                </ul>
                <img
                    src="../../images/modo-oscuro.png"
                    alt='modo-oscuro'
                    onClick={toggleTheme}
                />
            </div>
        </nav>
    )
}

export default Navbar