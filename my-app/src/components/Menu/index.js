import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from './ButtonLink';

function Menu(){
    return(
       <nav className="Menu"> 
            <a href="/" >
                <img className="Logo" src={Logo} alt="FiliFlix Logo"/>
            </a>
            
            <Button as="a" href="/">
                Novo vídeo
            </Button>
        </nav>
    );

}

export default Menu;