import React from 'react'
import Form from '../components/Form'
import { useContext } from 'react';
import { ContextGlobal } from '../components/utils/global.context';


function Contact() {

    const { theme } = useContext(ContextGlobal);


    return (
        <div className={`contacto contenido-${theme}`}>
            <h2>¿Necesitas más información?</h2>
            <p>Envianos tus datos y nos pondremos en contacto contigo</p>
            <Form />
        </div>
    )
}

export default Contact