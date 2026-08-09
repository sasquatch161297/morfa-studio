import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ImagePanel } from "@/components/editorial/ImagePanel";
import { InquiryCTA } from "@/components/editorial/InquiryCTA";
import { getArticle, journalArticles } from "@/data/content";

export function generateStaticParams() { return journalArticles.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const article = getArticle((await params).slug);
  return article ? { title: article.title, description: article.excerpt, openGraph: { images: [article.image], type: "article" } } : {};
}

export default async function JournalArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const article = getArticle((await params).slug);
  if (!article) notFound();
  const schema = { "@context": "https://schema.org", "@type": "Article", headline: article.title, description: article.excerpt, image: article.image, author: { "@type": "Organization", name: "MORFA Studio" } };
  return <>
    <article>
      <header className="article-hero"><div><p className="eyebrow">Journal / {article.category}</p><h1>{article.title}</h1></div><div><span>{article.date}</span><p>{article.excerpt}</p></div></header>
      <div className="article-image"><ImagePanel src={article.image} alt={article.title} priority /></div>
      <div className="article-body"><aside><p className="eyebrow">Observation</p><blockquote>{article.observation}</blockquote></aside><div>{article.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div>
    </article>
    <InquiryCTA />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </>;
}
