import { buttonVariants } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Description(){
    return(
        <main className=" w-full px-4 md:h-[900px] lg:px-64 pt-32 relative" style={{ backgroundImage: `url('/images/nftbackground.webp')`, backgroundSize: 'cover' }}>
            <div className="absolute top-0 left-0 w-full h-full z-10">
                <div className="h-full" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}></div>
            </div>
            <h1 className="w-full text-center text-[26px] relative z-20">
                Mintpad takes care of everything for you. Smart contracts, artwork generation, custom mint website or embed on your own, decentralization and more!
            </h1>
            <div className='text-center w-full py-10 relative z-20'>
                <Link href={'/'} className={buttonVariants({ variant: "destructive", size: "lg" })}>Create Collection</Link>
            </div>
        </main>
    )
}