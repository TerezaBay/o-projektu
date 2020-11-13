import React from 'react';
import './style.css';

const Author = ({ image, name, text }) => (
  <>
    <div className="author-div">
      <img src={image} alt={`Fotografie - ${name}`} />
      <p className="author_name">{name}</p>
      <p className="author_text">{text}</p>
    </div>
  </>
);

export default Author