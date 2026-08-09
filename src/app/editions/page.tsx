import type { Metadata } from "next";
import Link from "next/link";
import { ImagePanel } from "@/components/editorial/ImagePanel";
import { products } from "@/data/content";

export const metadata: Metadata = { title: "Editions", description: "Limited, numbered and experimental objects by MORFA Studio." };

export default function EditionsPage() {
  const editions = products.filter((p) => p.edition);
  return <><section className="page-hero dark"><p className="kicker">Numbered / Experimental / Collectible</p><div className="page-hero-grid"><h1>Editions</h1><p>Experimental pieces produced slowly in small, numbered quantities.</p></div></section><section className="collections-grid">{editions.map((product) => <article className="collection-card" key={product.slug}><Link href={`/objects/${product.slug}`}><ImagePanel src={product.heroImage} alt={product.name} /><div className="card-meta"><span>03 / {product.edition?.size}</span><h2>{product.name}</h2><p>Edition of {product.edition?.size} + {product.edition?.artistProofs} AP</p></div></Link></article>)}</section></>;
}
