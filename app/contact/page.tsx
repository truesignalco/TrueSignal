// @ts-nocheck
"use client";
import { ContactDesktop, ContactMobile } from "../../components/contact";

export default function Contact() {
  return (
    <main>
      <div className="desktop-only">
        <ContactDesktop />
      </div>
      <div className="mobile-only">
        <ContactMobile />
      </div>
    </main>
  );
}
