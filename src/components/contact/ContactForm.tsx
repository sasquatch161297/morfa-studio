"use client";

import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  return <form onSubmit={(event) => { event.preventDefault(); setSent(true); }} aria-label="Inquiry form">
    <div className="field"><label htmlFor="name">Name</label><input id="name" name="name" autoComplete="name" required /></div>
    <div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" required /></div>
    <div className="field"><label htmlFor="country">Country</label><input id="country" name="country" autoComplete="country-name" /></div>
    <div className="field"><label htmlFor="interest">Interest</label><select id="interest" name="interest"><option>Product inquiry</option><option>Trade / Interior Design</option><option>Press</option><option>Collaboration</option><option>Other</option></select></div>
    <div className="field full"><label htmlFor="message">Message</label><textarea id="message" name="message" required /></div>
    <button className="submit" type="submit">{sent ? "Thank you" : "Send inquiry ↗"}</button>
    {sent && <p className="field full" role="status">Your note has been prepared. Form delivery can be connected when the studio email service is selected.</p>}
  </form>;
}
