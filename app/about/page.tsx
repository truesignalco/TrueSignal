// @ts-nocheck
import { AboutCDesktop, AboutCMobile } from "../../components/about";

export default function About() {
  return (
    <main>
      <div className="desktop-only">
        <AboutCDesktop />
      </div>
      <div className="mobile-only">
        <AboutCMobile />
      </div>
    </main>
  );
}
