// @ts-nocheck
import { ServicesBDesktopInteractive, ServicesBMobileInteractive } from "../../components/services";
import { client } from "../../sanity/lib/client";
import { servicesTiersQuery } from "../../sanity/lib/queries";
import { projectId } from "../../sanity/env";

export const revalidate = 0; // Forces Next.js to always fetch fresh data, making Sanity updates instant


export default async function Services() {
  let servicesData = undefined;

  if (projectId !== 'PLACEHOLDER') {
    try {
      servicesData = await client.fetch(servicesTiersQuery);
    } catch (e) {
      console.error("Failed to fetch Sanity data:", e);
    }
  }

  return (
    <main>
      <div className="desktop-only" style={{ height: "100vh" }}>
        <ServicesBDesktopInteractive 
          servicesData={servicesData} 
        />
      </div>
      <div className="mobile-only" style={{ height: "100vh" }}>
        <ServicesBMobileInteractive 
          servicesData={servicesData} 
        />
      </div>
    </main>
  );
}
