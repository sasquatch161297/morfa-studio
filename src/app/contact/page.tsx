import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = { title: "Contact", description: "Start a conversation with MORFA Studio." };

export default function ContactPage() {
  return <section className="contact"><div><p className="eyebrow">Private inquiries / Trade / Press</p><h1>Start a conversation.</h1><p className="contact-address">MORFA Studio<br />Costa Rica<br /><br />studio@morfa.studio</p></div><ContactForm /></section>;
}
