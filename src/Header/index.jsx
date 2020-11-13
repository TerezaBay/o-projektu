import React from 'react'; 
import "./style.css"

const Header = ({ logo, buttonText1, buttonText2, title, titleText }) => (
  <>
    <header className="header_homepage">
      <div className="header_nav">
        <div className="header_logo">{logo}</div>
        <div className="header_menu">
          <ul className="header_menu-buttons">
            <li>{buttonText1}</li>
            <li>{buttonText2}</li>
          </ul>
        </div>
      </div>
      <h1 className="header_title">{title}</h1>
      <p className="header_title-text">{titleText}</p>
      {/* Tady bychom pak daly tlačítko, ale do úkolové verze jej dávat nemusíme. Ale klidně jej můžeš nastylovat, jestli chceš. (: */}
      {/* <button></button> */}
    </header>
  </>
);

export default Header