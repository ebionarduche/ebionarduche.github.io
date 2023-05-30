import React, { Component } from 'react';
import './Header.css';
import Curriculum from './icons/Curriculum';
import GitHubSVG from './icons/GitHub';
import LinkedinSVG from './icons/Linkedin';

class Header extends Component {
    render() {
        return(
            <div className='Header'>
                <div className='header-social-icons'>
                    <LinkedinSVG />
                    <GitHubSVG />
                    <Curriculum />
                </div>
                <h1>REACT DEVELOPER</h1>
            </div>
        );
    }
}

export default Header;
