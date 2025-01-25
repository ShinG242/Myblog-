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
