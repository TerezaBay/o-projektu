import React from 'react';
import { render } from 'react-dom';
import './index.html';
import './style.css';

import { homepage } from './texts.jsx';
import Header from './Header/index.jsx';

const SectionQuote = ({ text }) => (
  <>
    <section className="section_guote">
      <div className="quote_text">{text}</div>
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
        {listText.map((list) => (
          <li>{list}</li>
        ))}
      </ul>
      <p className="main_emphasized-text">{emphaText}</p>
    </main>
  </>
);

const SectionAuthors = ({ titleText, image, name, text }) => (
  <>
    <section className="section_authors">
      <div className="authors_title-div">
        <h3 className="authors_title-text">{titleText}</h3>
      </div>
      <div className="author-div">
        <img src={image} alt={`Fotografie - ${name}`} />
        <p className="author_name">{name}</p>
        <p className="author_text">{text}</p>
      </div>
    </section>
  </>
);

const App = () => {
  return (
    <>
      <Header
        logo={homepage.logo}
        buttonText1={homepage.headerButton1}
        buttonText2={homepage.headerButton2}
        title={homepage.headerTitle}
        titleText={homepage.headerText}
      />
      <SectionQuote text={homepage.section1} />
      <HomepageMain
        titleText={homepage.mainTitleText}
        listText={homepage.mainListText}
        emphaText={homepage.mainEmphaText}
      />
      <SectionQuote text={homepage.section2} />
      <SectionAuthors
        titleText={homepage.authors[0].authorsTitleText}
        image={homepage.authors[0].authorsImg}
        name={homepage.authors[0].authorsName}
        text={homepage.authors[0].authorsText}
      />

      <footer>Toto čeká na Věrku</footer>
    </>
  );
};

render(<App />, document.querySelector('#app'));
