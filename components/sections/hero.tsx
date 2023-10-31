import Image from "next/image"
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link'

export default function Hero(){
    return(
        <div className=' text-white px-4 lg:px-32 py-12 h-[calc(100vh-80px)] fixed top-24 z-10 overflow-hidden'>
        <h1 className=' font-graphikSemibold text-[36px] sm:text-[50px] md:text-[60px] px-4 md:px-16 xl:px-32 text-center mt-16 leading-tight'>
          The easiest way to launch your NFT collection
        </h1>
        <p className=' font-graphikRegular text-lg text-gray px-4 md:px-16 xl:px-48 mt-6 text-center'>
          Mintpad makes it easy to start an NFT collection. All you need is your artwork and a cryptocurrency wallet. Our platform takes care of the rest, handling everything else you need.
        </p>
        <div className='text-center w-full py-10'>
          <Link href={'/'} className={buttonVariants({ variant: "destructive", size: "lg" })}>Create Collection</Link>
        </div>
        <div className='w-full flex justify-center items-center mt-20'>
          <Image src={'/images/appleStudio.webp'} width={1000} height={1000} alt='apple' style={{ boxShadow: '0 0 300px 10px #003366' }} />
        </div>
      </div>
    )
}