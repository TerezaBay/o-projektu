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
        button1Text={home.headerButton1}
        button1Url={home.button1Url}
        button2Text={home.headerButton2}
        button2Url={home.button2Url}
        button3Text={home.headerButton3}
        title={home.headerTitle}
        titleText={home.headerText}
      />

      <HomepageMain
        section1Text={home.section1}
        mainTitle={home.mainTitleText}
        listText={home.mainListText}
        emphaText={home.mainEmphaText}
        section2Text={home.section2}
        authorsTitle={home.authorsTitleText}
        authors={home.authors}
      />

      <Footer copyrightText={home.footerCopyright} links={home.footerLinks} />
    </>
  );
};

render(<App />, document.querySelector('#app'));
