import React from 'react';
import { render } from 'react-dom';
import './index.html';
import './style.css';

import { headerTexts } from './texts.jsx';
import Header from './Header/index.jsx';

import { sectionTexts } from './texts.jsx';
import { homeMainTexts } from './texts.jsx';

const SectionQuote = ({ text }) => (
  <>
    <section className="section_guote">
      <div className="section_text">{text}</div>
    </section>
  </>
);

const HomepageMain = ({ titleText, listText, emphaText }) => (
  <>
    <main className="homepage_main">
      <div className="main_title-div">
        <h3 className="main_title-text">{titleText}</h3>
      </div>
      <ul className="main_list">
        {
        listText.map((list) => <li>{list}</li>)
        }
      </ul>
      <p className="main_emphasized-text">{emphaText}</p>
    </main>
  </>
);

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
      <SectionQuote text={sectionTexts.homepageSec1} />
      <HomepageMain
        titleText={homeMainTexts.mainTitleText}
        listText={homeMainTexts.mainListText}
        emphaText={homeMainTexts.mainEmphaText}
      />

      <footer>Toto čeká na Věrku</footer>
    </>
  );
};

render(<App />, document.querySelector('#app'));
