import React from 'react';
import './style/ButtonsLink.css';

function ButtonsLink({Rlink, Plink}) {

    const handleButtonClick = (link) => {
        window.open(link, '_blank');
    };
    return (
        <div>
            <button
                className='repository-button'
                type="button"
                onClick={() => handleButtonClick(Rlink)}
            >
        Repositório 
            </button>

            {
                Plink && (
                    <button
                        className='project-button'
                        type="button"
                        onClick={() => handleButtonClick(Plink)}
                    >
          Projeto 
                    </button>)
            }
        </div>
    );
}

export default ButtonsLink;
