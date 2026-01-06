import React from 'react';
import '../App.css';
import myphoto from '../images/anna-img.jpg';
import PersonalInfo from '../components/PersonalInfo';

function Header() {
  return (
    <header className="header">
      <div className="header-image">
        <img src={myphoto} alt="Ханіна Анна Юріївна" />
      </div>
      <div className="header-text">
        <h1>Ханіна Анна Юріївна</h1>
        <h2>Менеджер з закупівель</h2>
      </div>
      <PersonalInfo />
    </header>
  );
}

export default Header;
