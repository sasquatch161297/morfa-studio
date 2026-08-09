import Image from "next/image";
import Link from "next/link";
import { ImagePanel } from "@/components/editorial/ImagePanel";
import { Reveal } from "@/components/motion/Reveal";
import { collections, journalArticles, products } from "@/data/content";

export default function Home() {
  const future = collections.filter((item) => item.status === "forthcoming");
  return (
    <>
      <section className="hero">
        <div className="hero-media"><Image src="/images/products/lactarius/hero.png" alt="Lactarius indigo coffee table in a mineral gallery" fill priority loading="eager" sizes="100vw" /></div>
        <div className="hero-content">
          <div className="hero-brand">MORFA</div>
          <div><h1 className="hero-title">Formed by nature.<br />Made for living.</h1><Link className="text-link" href="/collections/mycelia">Explore collection <span>↗</span></Link></div>
          <p className="hero-meta">Designed in Costa Rica</p>
        </div>
      </section>

      <section className="section intro-copy">
        <Reveal><p className="eyebrow">01 — Our practice</p><h2 className="display">We translate the logic of <em>nature</em> into objects for living.</h2></Reveal>
        <div className="intro-note">
          <div className="process-line"><span>Nature</span><i>→</i><span>Principle</span><i>→</i><span>Geometry</span><i>→</i><span>Material</span><i>→</i><span>Object</span></div>
          <p>We observe how organisms grow, how water erodes stone, how roots adapt and how geological formations emerge. These systems become furniture.</p>
        </div>
      </section>

      <section className="collection-feature">
        <Reveal><Link href="/collections/mycelia"><ImagePanel src="/images/collections/mycelia/hero.png" alt="Mycelia furniture collection in a sculptural gallery" label="Explore" /></Link></Reveal>
        <div className="collection-caption"><p className="eyebrow">Collection 01<br />Fungi</p><h2>Mycelia</h2><div><p>Furniture shaped by growth, radial structures and fungal morphology.</p><Link className="text-link" href="/collections/mycelia">Explore Mycelia <span>↗</span></Link></div></div>
      </section>

      <section className="object-stories" aria-labelledby="objects-title">
        <div className="section" style={{ paddingBottom: 0 }}><p className="eyebrow">02 — Selected objects</p><h2 className="display" id="objects-title">Six studies in growth.</h2></div>
        {products.slice(0, 6).map((product) => (
          <article className="object-row" key={product.slug}>
            <Link className="image-panel" href={`/objects/${product.slug}`} data-cursor="View"><Image src={product.heroImage} alt={`${product.name} ${product.type}`} fill sizes="(max-width: 760px) 100vw, 65vw" /></Link>
            <Reveal className="object-info"><span className="object-no">MYCELIA {product.objectNumber}</span><h3>{product.name}</h3><p>{product.type}</p><p>{product.inspiration}</p><Link className="text-link" href={`/objects/${product.slug}`}>View object <span>↗</span></Link></Reveal>
          </article>
        ))}
      </section>

      <section className="section future">
        <div className="future-head"><div><p className="eyebrow">Future observations</p><h2>Coming next.</h2></div><p>New collections are developed as field studies:<br />slowly, through matter and experiment.</p></div>
        <div className="collection-list">{future.map((item) => <Link href={`/collections/${item.slug}`} key={item.slug}><span>{item.number}</span><strong>{item.name}</strong><span>{item.subject}</span><em>Forthcoming ↗</em></Link>)}</div>
      </section>

      <section className="section journal-preview">
        <ImagePanel src={journalArticles[0].image} alt="Macro study of Lactarius indigo" label="Open" />
        <div className="journal-copy"><div><p className="eyebrow">03 — Journal / Species</p><h2>{journalArticles[0].title}</h2><Link className="text-link" href="/journal">Read field notes <span>↗</span></Link></div><blockquote>“Observation is the first act of making.”</blockquote></div>
      </section>
    </>
  );
}
