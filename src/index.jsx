import React from 'react';
import { render } from 'react-dom';
import './index.html';
import './style.css';

import { home } from './homeTexts.jsx';
import Header from './Header/index.jsx';
import HomepageMain from './HomepageMain/index.jsx';
import Footer from './Footer/index.jsx';

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

      <HomepageMain
        sectionText1={home.section1}
        mainTitle={home.mainTitleText}
        listText={home.mainListText}
        emphaText={home.mainEmphaText}
        sectionText2={home.section2}
        authorsTitle={home.authorsTitleText}
        authors={home.authors}
      />

      <Footer copyrightText={home.footerCopyright} links={home.footerLinks} />
    </>
  );
};

render(<App />, document.querySelector('#app'));
