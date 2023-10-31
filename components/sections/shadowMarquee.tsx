
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

export default function ShadowedMarquee() {

    const names = [
        'Multi-chain',
        'Mint on your own website',
        'Whitelist',
        'Custom mint website',
        'NFT generator',
        'Optimised smart contracts',
        'Completely free',
      ];

      const reversedNames = [...names].reverse(); // Create a reversed copy of the names array


  return (
        <div className=' flex flex-col text-white gap-2 relative '>
            <div className='shadow-left z-20'></div>

            <Marquee className='' direction="right" speed={40} delay={0}>
                {names.map((name, index) => (
                <div key={index} className="px-16 py-10 mx-1.5 rounded-lg bg-[#2E394C]">
                    {name}
                </div>
                ))}
            </Marquee>
            <div className='shadow-right z-20'></div>
            <Marquee direction="left" speed={40} delay={0}>
                {reversedNames.map((name, index) => (
                <div key={index} className="px-16 py-10 mx-1.5 rounded-lg bg-[#2E394C]">
                    {name}
                </div>
                ))}
            </Marquee>
        </div>
  );
}
