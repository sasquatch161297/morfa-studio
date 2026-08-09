import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ImagePanel } from "@/components/editorial/ImagePanel";
import { InquiryCTA } from "@/components/editorial/InquiryCTA";
import { collections, getCollection, products } from "@/data/content";

export function generateStaticParams() { return collections.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const item = getCollection((await params).slug); return item ? { title: `${item.name} Collection`, description: item.description, openGraph: { images: [item.heroImage] } } : {}; }

export default async function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const collection = getCollection((await params).slug);
  if (!collection) notFound();
  const objects = products.filter((item) => item.collection === collection.slug);
  return <>
    <section className="collection-detail-hero"><ImagePanel src={collection.heroImage} alt={`${collection.name} collection`} priority /><div className="collection-detail-copy"><span>{collection.number}</span><h1>{collection.name}</h1><p>{collection.status === "forthcoming" ? "Forthcoming collection" : collection.description}</p></div></section>
    <section className="editorial-split"><div><p className="eyebrow">Origin — {collection.subject}</p><h2>Observation before form.</h2></div><div className="body"><p>{collection.philosophy}</p><p>MORFA begins with a system: how it grows, holds, protects or changes. Drawing isolates the principle. Making gives it weight.</p></div></section>
    <section className="product-story-media"><ImagePanel src={collection.gallery[0]} alt={`Material and natural reference for ${collection.name}`} /></section>
    <section className="translation"><p className="eyebrow">Design translation</p><h2 className="display">From organism<br />to object.</h2><div className="translation-flow"><div><span>01</span><strong>{collection.subject}</strong></div><div><span>02</span><strong>{collection.principles[0]}</strong></div><div><span>03</span><strong>Geometry</strong></div><div><span>04</span><strong>Material</strong></div><div><span>05</span><strong>Furniture</strong></div></div></section>
    {objects.length > 0 && <section className="objects-index"><p className="eyebrow">Objects in this collection</p>{objects.map((product) => <Link className="object-index-item" href={`/objects/${product.slug}`} key={product.slug}><span>{product.objectNumber}</span><h2>{product.name}</h2><p>{product.type}</p><span>View ↗</span></Link>)}</section>}
    {collection.status === "forthcoming" ? <InquiryCTA /> : <section className="section"><div className="future-head"><h2>Collection notes.</h2><p>Growth / radial structures / lamellae<br />Networks / repetition / adaptation</p></div><div style={{ position:"relative", aspectRatio:"16/8", marginTop:"3rem" }}><Image src={collection.gallery[1]} alt="Mycelia collection detail" fill sizes="94vw" style={{ objectFit:"cover" }} /></div></section>}
  </>;
}
