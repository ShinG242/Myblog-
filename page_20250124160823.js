// app/articles/page.js
import prisma from '../../lib/prisma';

export async function GET() {
  const articles = await prisma.article.findMany();
  return new Response(JSON.stringify(articles), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

// app/articles/page.js
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('/api/articles')
      .then(response => setArticles(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Articles</h1>
      {articles.map(article => (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
}
