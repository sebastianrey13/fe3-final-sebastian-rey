import React from 'react'
import { useContext } from 'react';
import { ContextGlobal } from '../components/utils/global.context';


function Footer() {

    const { theme } = useContext(ContextGlobal);

    return (
        <footer className={theme}>
            <div className='textoP'>
                <p>Powered by</p>
            </div>
            <div className='footerImagenes'>
                <img className='imgDH' src="../../public/images/DH.png" alt='DH-logo' width={200} />
                <div className='iconosFooter'>
                    <img src="../../images/facebook.png" alt='facebook-logo' />
                    <img src="../../images/instagram.png" alt='instagram-logo' />
                    <img src="../../images/tik-tok.png" alt='tiktok-logo' />
                    <img src="../../images/whatsapp.png" alt='whatsapp-logo' />
                </div>
            </div>
        </footer>
    )
}

export default Footer