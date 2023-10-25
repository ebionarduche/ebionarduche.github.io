import React from 'react';
import './style/Footer.css';
import LinkedinSVG from './icons/Linkedin';
import GitHubSVG from './icons/GitHub';

function Footer() {
    return(
        <div className="footer-container">
            <div className='footer-signature'>
                <h2>EBIO NARDUCHE</h2>
                <p>Desenvolvedor Full-Stack disponível para trabalhar e continuar aprendendo cada vez mais.</p>
            </div>
            <dir className='footer-social'>
                <h2>CONTATO (COLOCAR WACHTS AQUI)</h2>
                <div className='footer-icon'>
                    <GitHubSVG />
                    <LinkedinSVG />
                </div>
            </dir>
        </div>
    );
}

export default Footer;