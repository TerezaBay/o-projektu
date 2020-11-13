import React from 'react';
import { render } from 'react-dom';
import './index.html';
import './style.css';

import { homepageTexts } from './texts.jsx';
import Header from './Header/index.jsx';

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
        logo={homepageTexts.logo}
        buttonText1={homepageTexts.headerButton1}
        buttonText2={homepageTexts.headerButton2}
        title={homepageTexts.headerTitle}
        titleText={homepageTexts.headerText}
      />
      <SectionQuote text={homepageTexts.section1} />
      <HomepageMain
        titleText={homepageTexts.mainTitleText}
        listText={homepageTexts.mainListText}
        emphaText={homepageTexts.mainEmphaText}
      />
      <SectionQuote text={homepageTexts.section2} />

      <footer>Toto čeká na Věrku</footer>
    </>
  );
};

render(<App />, document.querySelector('#app'));
