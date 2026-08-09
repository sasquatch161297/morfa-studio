import type { Metadata } from "next";
import { ImagePanel } from "@/components/editorial/ImagePanel";
import { journalArticles } from "@/data/content";

export const metadata: Metadata = { title: "Journal", description: "Field notes on species, systems, materials and objects." };

export default function JournalPage() {
  return <><section className="page-hero"><p className="kicker">Field notes / Materials / Processes / Species / Objects</p><div className="page-hero-grid"><h1>Journal</h1><p>Observations from the space between organism and object.</p></div></section><section className="journal-grid">{journalArticles.map((article) => <article className="article-card" key={article.slug}><ImagePanel src={article.image} alt={article.title} label="Read" /><div className="article-info"><div><p className="eyebrow">{article.category} — {article.date}</p><h2>{article.title}</h2><p>{article.excerpt}</p></div><span>Read ↗</span></div></article>)}</section></>;
}
