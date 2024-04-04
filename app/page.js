import Image from "next/image";
import HomepageNav from "./components/homepagenav/HomepageNav";
import HeroBanner from "./components/herobanner/HeroBanner";
import TrustCard from "./components/trustcard/TrustCard";

export default function Home() {
  return (
    <main>
      <div className="h-screen max-w-6xl mx-auto">
        <HomepageNav></HomepageNav>
        <HeroBanner></HeroBanner>
        <TrustCard></TrustCard>
      </div>
    </main>
  );
}
