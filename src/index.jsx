import React from 'react';
import { render } from 'react-dom';
import './index.html';

const App = () => {
  return (
    <>
      <header>
        <h1>test</h1>
      </header>
      <main>
        <p>Moje první React stránka</p>
      </main>
      <footer>Martin Podloucký</footer>
    </>
  );
};

render(<App />, document.querySelector('#app'));
