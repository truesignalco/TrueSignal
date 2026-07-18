// @ts-nocheck
import { AboutCDesktop, AboutCMobile } from "../../components/about";
import { client } from "../../sanity/lib/client";
import { aboutPageQuery } from "../../sanity/lib/queries";
import { projectId } from "../../sanity/env";

export default async function About() {
  let aboutPageData = undefined;

  if (projectId !== 'PLACEHOLDER') {
    try {
      aboutPageData = await client.fetch(aboutPageQuery);
    } catch (e) {
      console.error("Failed to fetch Sanity data:", e);
    }
  }

  return (
    <main>
      <div className="desktop-only">
        <AboutCDesktop aboutPageData={aboutPageData} />
      </div>
      <div className="mobile-only">
        <AboutCMobile aboutPageData={aboutPageData} />
      </div>
    </main>
  );
}
