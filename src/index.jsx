import React from 'react';
import { render } from 'react-dom';
import './index.html';
import './style.css';

import { home } from './homeTexts.jsx';
import Header from './Header/index.jsx';
import Footer from './Footer/index.jsx';

const SectionQuote = ({ text }) => (
  <>
    <section className="section_quote">
      <div className="quote_text">{text}</div>
    </section>
  </>
);

const HomepageMain = ({ titleText, listText, emphaText }) => (
  <>
    <main className="homepage_main">
      <div className="main_title-div">
        <h2 className="main_title-text">{titleText}</h2>
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

const Author = ({ image, name, text }) => (
  <>
    <div className="author-div">
      <img src={image} alt={`Fotografie - ${name}`} />
      <p className="author_name">{name}</p>
      <p className="author_text">{text}</p>
    </div>
  </>
);

const SectionAuthors = ({ titleText, authors }) => (
  <>
    <section className="section_authors">
      <div className="authors_title-div">
        <h2 className="authors_title-text">{titleText}</h2>
      </div>
      <div className="authors_content">
        {authors.map((author) => (
          <Author
            image={author.authorsImg}
            name={author.authorsName}
            text={author.authorsText}
          />
        ))}
      </div>
    </section>
  </>
);

const App = () => {
  return (
    <>
      <Header
        logo={home.logo}
        buttonText1={home.headerButton1}
        buttonText2={home.headerButton2}
        buttonText3={home.headerButton3}
        title={home.headerTitle}
        titleText={home.headerText}
      />
      <SectionQuote text={home.section1} />
      <HomepageMain
        titleText={home.mainTitleText}
        listText={home.mainListText}
        emphaText={home.mainEmphaText}
      />
      <SectionQuote text={home.section2} />
      <SectionAuthors
        titleText={home.authorsTitleText}
        authors={home.authors}
      />

      <Footer copyrightText={home.footerCopyright} links={home.footerLinks} />
    </>
  );
};

render(<App />, document.querySelector('#app'));
