// @ts-nocheck
"use client";
import { ServicesBDesktopInteractive, ServicesBMobileInteractive } from "../../components/services";

export default function Services() {
  return (
    <main>
      <div className="desktop-only">
        <ServicesBDesktopInteractive />
      </div>
      <div className="mobile-only">
        <ServicesBMobileInteractive />
      </div>
    </main>
  );
}
