import React from 'react';
import Logo from '../../img/jmflix.png'
import "./Menu.css"
import Button from '../Button';
// import ButtonLink from './componentes/ButtonLink';

// import { Container } from './styles';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="JMFlix" />
      </a>

      {/* <ButtonLink className="ButtonLink" href="/">
        Novo Vídeo
      </ButtonLink> */}
      <Button as="a" className="ButtonLink" href="/">
        Novo Vídeo
      </Button>

    </nav>
  );
}

export default Menu;