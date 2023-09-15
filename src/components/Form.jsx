import React from 'react'
import { useState, useEffect, useContext } from 'react'
import Error from './Error'
import { ContextGlobal } from '../components/utils/global.context';

function Form() {

    const { theme } = useContext(ContextGlobal);

    const [email, setEmail] = useState("")
    const [nombre, setNombre] = useState("")
    const [error, setError] = useState("")
    const [mensaje, setMensaje] = useState("")


    function validarEmail() {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (!emailPattern.test(email)) {
            return true;
        } else {
            setError('');
            return false;
        }
    }

    const handleSubmit = (e) => {
        setError("")
        setMensaje("")
        e.preventDefault()
        if ([nombre, email].includes("")) {
            setError("Por favor completa los campos")
            setMensaje("")
        }
        else if (nombre.length < 5) {
            setError("Nombre debe tener mas de 5 caracteres")
            setMensaje("")
        }
        else if (validarEmail()) {
            setError("Email debe tener un formato valido")
            setMensaje("")
        }
        else {
            setError("")
            setMensaje(`Gracias ${nombre}, Te contactaremos cuanto antes via email`)
        }
    }

    return (
        <div className='divForm'>
            <form
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    placeholder='Ingresar su nombre'
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
                <input
                    type="email"
                    placeholder='Ingresar su email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <input
                    className='botonFormulario'
                    type='submit'
                    value="Enviar"
                />
            </form>

            <div className={`error mensaje mensaje-${theme}`}>{mensaje}</div>

            <Error
                info={error}
            />
        </div>
    )
}

export default Form