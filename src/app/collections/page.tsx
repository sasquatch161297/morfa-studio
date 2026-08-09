import type { Metadata } from "next";
import Link from "next/link";
import { ImagePanel } from "@/components/editorial/ImagePanel";
import { collections } from "@/data/content";

export const metadata: Metadata = { title: "Collections", description: "Studies of natural systems translated into furniture." };

export default function CollectionsPage() {
  return <><section className="page-hero"><p className="kicker">Natural systems / Material studies / Objects</p><div className="page-hero-grid"><h1>Collections</h1><p>Each collection begins with sustained observation of a natural process. What follows is not imitation, but translation.</p></div></section><section className="collections-grid">{collections.map((item) => <article className="collection-card" key={item.slug}><Link href={`/collections/${item.slug}`}><ImagePanel src={item.heroImage} alt={`${item.name} collection study`} label="Explore" /><div className="card-meta"><span>{item.number}</span><h2>{item.name}</h2><p>{item.status === "forthcoming" ? "Coming next" : item.subject}</p></div></Link></article>)}</section></>;
}
