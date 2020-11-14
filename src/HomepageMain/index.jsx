import React from 'react';
import './style.css';

import SectionQuote from '../SectionQuote/index.jsx';
import Author from '../Author/index.jsx';

const HomepageMain = ({
  sectionText1,
  mainTitle,
  listText,
  emphaText,
  sectionText2,
  authorsTitle,
  authors,
}) => (
  <>
    <SectionQuote text={sectionText1} />

    <main id="#main" className="homepage_main">
      <div className="main_title-div">
        <h2 className="main_title-text">{mainTitle}</h2>
      </div>
      <ul className="main_list">
        {listText.map((list) => (
          <li>{list}</li>
        ))}
      </ul>
      <p className="main_emphasized-text">{emphaText}</p>

      <SectionQuote text={sectionText2} />

      <section id="#authors" className="section_authors">
        <div className="authors_title-div">
          <h2 className="authors_title-text">{authorsTitle}</h2>
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
    </main>
  </>
);

export default HomepageMain;
