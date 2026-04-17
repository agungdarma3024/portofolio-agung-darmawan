import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const blogDir = "content";
  const fullPath = path.join(process.cwd(), blogDir, `${slug}.md`);
  
  const fileContent = fs.readFileSync(fullPath, 'utf-8');
  const { data, content } = matter(fileContent);

  // Proses markdown menjadi HTML
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <article className="prose prose-invert prose-emerald lg:prose-xl mx-auto">
        <p className="text-emerald-500 font-medium mb-2">{data.date}</p>
        <h1 className="text-4xl font-bold text-white mb-8">{data.title}</h1>
        <div 
          className="text-gray-300 leading-relaxed space-y-4"
          dangerouslySetInnerHTML={{ __html: contentHtml }} 
        />
      </article>
      <div className="mt-12 pt-8 border-t border-gray-800">
        <a href="/blog" className="text-emerald-500 hover:text-emerald-400">← Kembali ke Blog</a>
      </div>
    </main>
  );
}