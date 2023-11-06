"use client"

import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const Links = [
        { name: "HOME", link: "/" },
        { name: "CREATE YOUR PLAN", link: "/create-your-plan" },
    ];
    const [open, setOpen] = useState(false);

    return (
        <header className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center  bg-primary  py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                    <span>FoodyAI</span>
                </div>
                <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                    {
                        open ? <>X</> : <>☰</>
                    }
                </div>
                <ul className={`md:flex md:items-center bg-primary md:pb-0 pb-2 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (
                            <li className='md:ml-8 md:my-0 my-7 font-semibold ' key={link.name}>
                                <Link href={link.link} className='text-gray-800 hover:text-white duration-500 hover:border-b-2 hover:border-blue-600'>{link.name}</Link>
                            </li>))
                    }
                </ul>
            </div>
        </header>
    );
}
