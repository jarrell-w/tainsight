import Image from "next/image";
import HomepageNav from "./components/homepagenav/HomepageNav";
import HeroBanner from "./components/herobanner/HeroBanner";
import TrustCard from "./components/trustcard/TrustCard";
import HomepageNavWrapper from "./components/homepagenavwrapper/HomepageNavWrapper";



export default async function Home() {
  return (
    <main>
      <div className="h-screen max-w-6xl mx-auto">
        <HomepageNavWrapper></HomepageNavWrapper>
        <HeroBanner></HeroBanner>
        <TrustCard></TrustCard>
      </div>
    </main>
  );
}
