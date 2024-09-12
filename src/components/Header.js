import React from 'react';
import '../App.css';

function Header() {
  return (
    <header className="header">
      <div className="header-text">
        <h1>Ханіна Анна Юріївна</h1>
        <h2>Продавець-консультант</h2>
      </div>
      <div className="header-image">
        <img src="/images/anna-img.jpg" alt="Ханіна Анна Юріївна" />
      </div>
    </header>
  );
}

export default Header;
