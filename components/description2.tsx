import ShadowedMarquee from "@/components/shadowMarquee";
import Image from "next/image";

export default function Description2() {
    return(
        <main className="h-screen flex flex-col gap-32 bg-bgDark px-4 md:h-screen xl:px-64 pt-16">
            <div className="flex justify-between gap-4 ">
                <h1 className="text-[20px]  h-fit">
                    Join other creators and teams who’ve used Mintpad to launch and manage their NFT projects.
                </h1>
                <div className=" h-fit">
                    <Image src={'/images/nationwide.webp'} width={1000} height={1000} alt="doge" className="w-[346px] h-[60px]"/>
                </div>
            </div>
            <ShadowedMarquee />
        </main>
    )
}