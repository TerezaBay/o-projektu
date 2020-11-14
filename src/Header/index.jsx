import React from 'react';
import './style.css';
import Button from '../Button/index.jsx';

const Header = ({
  logo,
  buttonText1,
  buttonText2,
  buttonText3,
  title,
  titleText,
}) => (
  <>
    <header id="#header" className="header_homepage">
      <div className="header_nav">
        <div className="header_logo">{logo}</div>
        <div className="header_menu">
          <ul className="header_menu-buttons">
            <li>
              <Button text={buttonText1} type="transparent" />
            </li>
            <li>
              <Button text={buttonText2} type="transparent" />
            </li>
          </ul>
        </div>
      </div>
      <div className="header_content">
        <h1 className="header_title">{title}</h1>
        <p className="header_title-text">{titleText}</p>
        <Button text={buttonText3} />
      </div>
    </header>
  </>
);

export default Header;
