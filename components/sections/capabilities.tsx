import Image from "next/image";

export default function Capabilities() {
  return (
    <div className="text-white h-fit px-4 md:px-6 xl:px-28 2xl:px-64 py-12 mt-24">
      <h1 className="text-3xl font-semibold text-center">Capabilities</h1>
      <div className="flex flex-col md:flex-row py-14 gap-4">
        <Card
          title="Sell anywhere"
          description="Your collection is instantly available on marketplaces."
          imageSrc="/images/sellAnywhere.webp"
        />
        <Card
          title="Generative art"
          description="Easily generate and launch your own generative art project."
          imageSrc="/images/generativeArt.webp"
        />
        <Card
          title="Open Edition"
          description="Easily create and launch your own open edition project."
          imageSrc="/images/openEdition.webp"
        />
      </div>
    </div>
  );
}

function Card({ title, description, imageSrc }: { title: string; description: string; imageSrc: string }) {
  const cardBackgroundStyle = {
    background: 'linear-gradient(to right, #1C2634, #05131D)',
  };

  return (
    <div className="flex flex-col justify-center items-center rounded-lg overflow-hidden">
      <div>
        <Image src={imageSrc} blurDataURL="data:image/jpeg..." placeholder="blur" priority={true}  width={1000} height={1000} alt="pic"   />
      </div>
      <div style={cardBackgroundStyle} className="text-white w-full bg-gray py-6 px-6">
        <h1 className="text-[28px] font-semibold py-2">{title}</h1>
        <p className="text-gray text-lg py-2 font-extralight">{description}</p>
      </div>
    </div>
  );
}

