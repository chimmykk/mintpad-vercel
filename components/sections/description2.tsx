import ShadowedMarquee from "@/components/sections/shadowMarquee";
import Image from "next/image";

export default function Description2() {
    return(
        <main className=" flex flex-col gap-32  px-4 xl:px-64 py-16">
            <div className="flex flex-col md:flex-row justify-between gap-4 ">
                <h1 className="text-[20px]  h-fit">
                    Join other creators and teams who’ve used Mintpad to launch and manage their NFT projects.
                </h1>
                <div className=" h-fit">
                    <Image src={'/images/nationwide.webp'} width={500} height={500} alt="doge" className="w-[346px] h-[60px]"/>
                </div>
            </div>
            <ShadowedMarquee />
        </main>
    )
}