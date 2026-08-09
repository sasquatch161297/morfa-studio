import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ImagePanel } from "@/components/editorial/ImagePanel";
import { InquiryCTA } from "@/components/editorial/InquiryCTA";
import { getCollection, getProduct, products } from "@/data/content";

export function generateStaticParams() { return products.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const product = getProduct((await params).slug); return product ? { title: `${product.name} ${product.type}`, description: product.description, openGraph: { images: [product.heroImage] } } : {}; }

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const product = getProduct((await params).slug);
  if (!product) notFound();
  const collection = getCollection(product.collection);
  const collectionName = collection?.name ?? product.collection;
  const dimensions = Object.entries(product.dimensions).filter(([key]) => key !== "unit") as [string, number][];
  const schema = { "@context":"https://schema.org", "@type":"Product", name:`${product.name} ${product.type}`, description:product.description, image:product.heroImage, brand:{ "@type":"Brand", name:"MORFA Studio" }, material:product.materials.map((m) => m.name).join(", ") };
  return <>
    <section className="product-hero"><ImagePanel src={product.heroImage} alt={`${product.name} ${product.type}`} priority /><div className="product-heading"><div><p className="eyebrow">{collectionName.toUpperCase()} {product.objectNumber}</p><h1>{product.name}</h1></div><p>{product.type}</p></div></section>
    <section className="metadata"><div><span>Collection</span>{collectionName}</div><div><span>Object</span>{product.objectNumber}</div><div><span>Type</span>{product.type}</div><div><span>Designed</span>Costa Rica</div></section>
    <section className="editorial-split"><div><p className="eyebrow">Story — Natural reference</p><h2>{product.inspiration}</h2></div><div className="body"><p>{product.description}</p><p>The natural system is distilled into three design instructions: {product.designPrinciples.slice(0, 3).map((principle) => principle.toLowerCase()).join(", ")}. Together they determine form, structure and material character.</p></div></section>
    <section className="product-story-media"><ImagePanel src={product.gallery[1]} alt={`${product.inspiration} biological structure`} label="Open" /></section>
    <section className="translation"><p className="eyebrow">Design translation</p><div className="translation-flow"><div><span>Nature</span><strong>{product.inspiration}</strong></div>{product.designPrinciples.slice(0,3).map((principle, index) => <div key={principle}><span>0{index + 2}</span><strong>{principle}</strong></div>)}<div><span>Object</span><strong>{product.type}</strong></div></div></section>
    <section className="technical"><div className="drawing" aria-label={`Technical silhouette of ${product.name}`}><div className="drawing-shape" /></div><div className="technical-copy"><p className="eyebrow">Technical / provisional</p><h2>Dimensions<br />& materials.</h2>{dimensions.map(([key,value]) => <div className="spec-row" key={key}><span>{key}</span><strong>{value} mm</strong></div>)}{product.materials.map((material) => <div className="spec-row" key={material.name}><span>Material</span><strong>{material.name}</strong></div>)}</div></section>
    {product.edition && <section className="editorial-split"><div><p className="eyebrow">MORFA Editions</p><h2>Limited by intention.</h2></div><div className="body"><p>Edition of {product.edition.size} + {product.edition.artistProofs} AP. Each object is numbered and accompanied by a certificate of authenticity.</p><p>Sample number<br /><strong style={{ fontFamily:"var(--font-serif)", fontSize:"3rem", fontWeight:400 }}>03 / {product.edition.size}</strong></p></div></section>}
    <InquiryCTA object={product.name} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </>;
}
