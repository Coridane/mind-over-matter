import React from 'react';
import About from './components/About';
import ArticleLinks from './components/ArticleLinks';
import GameLink from './components/GameLink';

function AboutPage() {
  return (
    <div className="about-page">
      <About />
      <ArticleLinks />
      <GameLink />
    </div>
  );
}

export default AboutPage;
