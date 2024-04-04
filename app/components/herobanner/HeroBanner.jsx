import Image from "next/image";
import Link from "next/link";

const HeroBanner = () => {
  const heroAltText = "hero banner";
  const heroImgSrc = "/hero_khanmigo_v3@2x.png";
  const heroWidth = 450;
  const heroHeight = 450;
  return (
    <div className="py-20 mx-auto flex justify-center gap-6 border-b-2 flex-1">
      <div>
        <Image
          src={heroImgSrc}
          alt={heroAltText}
          width={heroWidth}
          height={heroHeight}
        />
      </div>
      <div className="py-5 mx-3 flex-1">
        <h1 className="text-4xl lg:text-5xl font-bold">Taking The</h1>
        <h1 className="text-4xl lg:text-5xl font-bold">Hassle Out</h1>
        <h1 className="text-4xl lg:text-5xl font-bold">Of Grading</h1>
        <h2 className="text-xl font-semibold">
          Empowering Educators, Streamlining Success.
        </h2>
        <h3 className="py-10">
          <Link href="/" className="text-2xl font-semibold underline">
            Become a Professor!
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default HeroBanner;
