import React, { useEffect } from 'react';
import Card from './Card';
import './style/Projects.css';
import './style/Transition.css';
import projects from './projects';

function Projects() {
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            console.log(entries);
            entries[0].target.classList.add('init-hidden-off'); // aplica o off no hidden
        }, {
            threshold: 0.5 // Controlla em que posição da imagem usa o efeito (0.5 === meio da imagem)
        });
        // observa os elementos na pagina e quando encontra aplica a função acima
        const elements = document.querySelectorAll('.individual-project.init-hidden'); 
        elements.forEach(element => {
            observer.observe(element);
        });

        return () => {
            elements.forEach(element => {
                observer.unobserve(element);
            });
        };
    }, []); 

    return (
        <div id='projects' className="project-container">
            <h1>PROJETOS</h1>
            <p>Aqui você encontrará alguns dos projetos pessoais <br /> que desenvolvi durante meus estudos em programação.</p>
            
            {
                projects.map(({image, screen, projectName, subTitle, description, skills, Rlink, Plink }) => (
                    <div className="individual-project init-hidden" key={projectName}>
                        <img src={image} alt="imagem" className={`project-img ${screen}`} />
                        <Card 
                            projectName={projectName}
                            subTitle={subTitle}
                            description={description}
                            skills={skills}
                            Rlink={Rlink}
                            Plink={Plink}
                        />
                    </div>
                ))
            }
        </div>
    );}

export default Projects;