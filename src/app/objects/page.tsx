import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/data/content";

export const metadata: Metadata = { title: "Objects", description: "Sculptural furniture and functional objects by MORFA Studio." };

export default function ObjectsPage() {
  return <><section className="page-hero dark"><p className="kicker">Archive 2026</p><div className="page-hero-grid"><h1>Objects</h1><p>Functional forms developed through observation, drawing, material trials and full-scale making.</p></div></section><section className="objects-index">{products.map((product) => <Link className="object-index-item" href={`/objects/${product.slug}`} key={product.slug}><span>{product.objectNumber}</span><h2>{product.name}</h2><p>{product.type}</p><span>View ↗</span></Link>)}</section></>;
}
