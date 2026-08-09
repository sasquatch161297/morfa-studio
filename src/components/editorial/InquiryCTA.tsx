import Link from "next/link";

export function InquiryCTA({ object }: { object?: string }) {
  return (
    <section className="inquiry-cta">
      <p className="eyebrow">Private inquiries</p>
      <h2>{object ? `Inquire about ${object}.` : "Start a conversation."}</h2>
      <Link className="circle-link" href={`/contact${object ? `?object=${encodeURIComponent(object)}` : ""}`}><span>Request<br />information</span><b aria-hidden="true">↗</b></Link>
    </section>
  );
}
