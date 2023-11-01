import Image from "next/image";

export default function Capabilities() {
  return (
    <div className="text-white h-fit px-4 xl:px-64 py-12 mt-24">
      <h1 className="text-3xl font-semibold text-center">Capabilities</h1>
      <div className="flex flex-col md:flex-row py-14 md:space-x-8 gap-4">
        <Card
          title="Sell anywhere"
          description="Your collection is instantly available on marketplaces."
        />
        <Card
          title="Generative art"
          description="Easily generate and launch your own generative art project."
        />
        <Card
          title="Open Edition"
          description="Easily create and launch your own open edition project."
        />
      </div>
    </div>
  );
}


function Card({ title, description }: {title: string, description: string}) {
    const cardBackgroundStyle = {
      background: 'linear-gradient(to right, #1C2634, #05131D)',
    };
  
    return (
      <div className="flex flex-col justify-center items-center rounded-lg overflow-hidden">
        <div>
          <Image src={'/images/sellAnywhere.webp'} width={1000} height={1000} alt="pic" />
        </div>
        <div style={cardBackgroundStyle} className="text-white w-full bg-gray py-6 px-6">
          <h1 className="text-[28px] font-semibold py-2">{title}</h1>
          <p className="text-gray text-lg py-2 font-extralight">{description}</p>
        </div>
      </div>
    );
  }
