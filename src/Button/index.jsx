import React from 'react';
import './style.css';

// Mamé dva typy buttonů, default a transparent
const Button = ({ text, url, type = 'default' }) => (
  <>
    <div className="button">
      <a href={url} className={type}>
        {text}
      </a>
    </div>
  </>
);

export default Button;
