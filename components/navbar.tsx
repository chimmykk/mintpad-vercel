'use client'

import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button"
import { AlignRight } from 'lucide-react';
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react"
import { X } from 'lucide-react';

export default function Navbar() {

        const [showMenu, setShowMenu] = useState(false)
    const [rotate, setRotate] = useState(false)
    const [scrolled, setScrolled] = useState(false);


        useEffect(() => {
        if(showMenu) {
            document.body.style.overflowY = "hidden"
        } else {
            document.body.style.overflowY = "auto";
            setRotate(false)
        }
    },[showMenu])

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 100) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
    

    const pathname = usePathname()

    return(
        <nav style={{ backdropFilter: 'blur(6.7px)' }} className={` ${scrolled ? 'bg-opacity-60' : ''} ${pathname === '/login' ? 'hidden' : ''} bg-bgDark px-4 md:px-8 lg:px-20 xl:px-32 py-4 fixed  z-50 top-0 left-0 right-0  text-gray`}>
            {/* larger screens */}
            <div className="hidden lg:flex justify-between items-center">
                <Link href="/">
                    <Image 
                        src={'/images/Logo-Mintpad-Grey.webp'}
                        width={1000}
                        height={1000}
                        alt="logo"
                        className=" w-[135px] h-[23px]"
                    /> 
                </Link>
                <div className="hidden lg:block">
                    <ul className="flex lg:space-x-8 xl:space-x-10 text-base font-medium items-center ">
                        {/* <li>
                            <Link href="/" className={`${pathname === '/' ? 'text-[#fff]' : ''} transition-all duration-200`}>Home</Link>
                        </li> */}
                        <li>
                            <Link href="/resources" className=" hover:text-white transition-all duration-200">Resources</Link>
                        </li>
                        <li>
                            <Link href="/blog" className=" hover:text-white transition-all duration-200">Blog</Link>
                        </li>
                        <li>
                            <Link href="/support" className=" hover:text-white transition-all duration-200">Support</Link>
                        </li>
                        <li>
                            <Link href={'/'} className={buttonVariants({ variant: "default", size: "lg" })}>Sign up</Link>
                        </li>
                        <li>
                            <Link href="/support" className=" hover:text-white transition-all duration-200">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
            {/* smaller screens */}
            <div className="lg:hidden flex justify-between items-center">
                    <Link href="/">
                        <Image 
                            src={'/images/Logo-Mintpad-Grey.webp'}
                            width={1000}
                            height={1000}
                            alt="logo"
                            className=" w-[135px] h-[23px]"
                        /> 
                    </Link>
                <div onClick={() => setShowMenu(true)} >
                    <AlignRight />
                </div>
               
                <div className={`${showMenu ? "  left-0" : " -left-[100%]"} text-lg fixed top-0  min-h-screen w-full`}>
                    <div onClick={() => setShowMenu(false)} className="absolute  overflow-y-hidden z-50 w-full min-h-screen bg-black opacity-50">
                    </div>
                    <div  className={`${showMenu ? "right-0 " : "-right-[100%]"} flex flex-col items-center text-white bg-bgDark py-20 transition-all duration-500 min-h-screen max-h-screen ease-in-out px-10 w-full gap-8 fixed top-0 z-50 overflow-y-auto overflow-x-hidden `}>
                        <button onClick={() => setShowMenu(false)}  className="absolute top-5 right-5 "><X /></button>
                        <Link className="" onClick={() => setShowMenu(false)} href={'/'}>Home</Link>
                        <Link className="" onClick={() => setShowMenu(false)} href={'/'}>Features</Link>
                        <Link className="" onClick={() => setShowMenu(false)} href={'/'}>Pricing</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}