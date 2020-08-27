import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
    <header className = {s.header}>
    <img src='https://upload.wikimedia.org/wikipedia/ru/c/cf/Dukelogo.png'></img>
  </header>
    );
}

export default Header;