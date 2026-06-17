// @ts-nocheck
import { HomeV6Desktop, HomeV6Mobile } from "../components/home";

export default function Home() {
  return (
    <main>
      <div className="desktop-only">
        <HomeV6Desktop />
      </div>
      <div className="mobile-only">
        <HomeV6Mobile />
      </div>
    </main>
  );
}
