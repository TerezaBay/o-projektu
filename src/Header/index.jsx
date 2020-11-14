import React from 'react';
import './style.css';
import Button from '../Button/index.jsx';

const Header = ({
  logo,
  button1Text,
  button1Url,
  button2Text,
  button2Url,
  button3Text,
  title,
  titleText,
}) => (
  <>
    <header id="header" className="header_homepage">
      <div className="header_nav">
        <div className="header_logo">{logo}</div>
        <div className="header_menu">
          <ul className="header_menu-buttons">
            <li>
              <Button text={button1Text} url={button1Url} type="transparent" />
            </li>
            <li>
              <Button text={button2Text} url={button2Url}type="transparent" />
            </li>
          </ul>
        </div>
      </div>
      <div className="header_content">
        <h1 className="header_title">{title}</h1>
        <p className="header_title-text">{titleText}</p>
        <Button text={button3Text} />
      </div>
    </header>
  </>
);

export default Header;
