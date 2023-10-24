import React from 'react';

function ArticleLinks() {
  const articles = [
    { title: 'Article 1', link: '/article1' },
    { title: 'Article 2', link: '/article2' },
    // Add more articles here
  ];

  return (
    <div className="article-links">
      <h2>Related Articles</h2>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <a href={article.link}>{article.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArticleLinks;
