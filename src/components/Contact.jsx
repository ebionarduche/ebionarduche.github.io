import React from 'react';
import './style/Contact.css';
function Contact() {

    return (
        <div id='contact' className="contact-container">
            <form action="https://formsubmit.co/ebionarduche77@gmail.com" method="POST">
                <h1>CONTATO</h1>
                <input type="hidden" name="_captcha" value="false" />
                {/* <input type="hidden" name="_next" value="https://www.youtube.com/watch?v=jfKfPfyJRdk&ab_channel=LofiGirl" /> */}
                <label htmlFor="nome">
                    Nome:
                    <input type="text" name="name" placeholder="Escreva seu nome aqui"required />
                </label>
                <label htmlFor="email">
        Email:
                    <input type="email" name="email" placeholder="Escreva seu email aqui" required />
                </label>

                <label htmlFor="">
        Mensagem:
                    <textarea name="message" placeholder="Escreva sua mensagem aqui" />
                </label>
                <button type="submit">Enviar</button>
            </form>    
        </div>
    );
}

export default Contact;


