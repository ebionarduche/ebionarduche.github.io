import React from 'react';
import './style/Card.css';
import ButtonsLink from './ButtonsLink';
import PropTypes from 'prop-types';



function Card({ projectName, subTitle, description, skills, Rlink, Plink = [] }) {
    return (
        <div className='Card'>
            <h2>{projectName}</h2>
            <h3>{subTitle}</h3>
            <p>{description}</p>
            <div className='skills-container'>
                {
                    skills.map((skill) => (
                        <div className='skills-div' key={skill}>
                            <span className={`skills-span-${skill} skills-span`}>{skill}</span>
                        </div>
                    ))
                }
            </div>
            <ButtonsLink 
                Rlink={Rlink}
                Plink={Plink}
            />
        </div>
    );
}

Card.propTypes = {
    projectName: PropTypes.string,
    subTitle: PropTypes.string,
    description: PropTypes.string,
    skills: PropTypes.array,
    Rlink: PropTypes.string,
    Plink: PropTypes.string,
}.isRequired;

export default Card;
