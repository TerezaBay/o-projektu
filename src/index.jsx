import React from 'react';
import { render } from 'react-dom';
import './index.html';
import "./style.css"

import headerTexts from "./texts.jsx"
import Header from "./Header/index.jsx"

const App = () => {
  return (
    <>
      <Header
        logo={headerTexts.logo}
        buttonText1={headerTexts.buttonText1}
        buttonText2={headerTexts.buttonText2}
        title={headerTexts.title}
        titleText={headerTexts.titleText}
      />
      <main>
        <p>Naše malé trápení s úkolem</p>
      </main>

      <footer>Toto čeká na Věrku</footer>
    </>
  );
};

render(<App />, document.querySelector('#app'));
