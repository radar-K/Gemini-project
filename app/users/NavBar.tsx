'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { RiGeminiLine } from "react-icons/ri";

const NavBar = () => {
    const currentPath = usePathname();
    const getLinkClass = (href: string) => currentPath === href ? "text-blue-500 font-bold" : "hover:text-blue-300";


  return (
    <nav className="flex justify-center space-x-11 pt-9 border-b mb-20 rounded-md border-gray-900">  
    <Link href="/"><RiGeminiLine /></Link>
    <ul className='flex space-x-6 pb-5'>
        <li><Link className={`hover:text-blue-300 ${getLinkClass("/users")}`} href="/users"> Karolina </Link></li>
        <li><Link className={`hover:text-blue-300 ${getLinkClass("/users/user1")}`} href="/users/user1">Hampus</Link></li>
        <li><Link className={`hover:text-blue-300 ${getLinkClass("/users/user2")}`} href="/users/user2">Noel</Link></li>
        <li><Link className={`hover:text-blue-300 ${getLinkClass("/users/user3")}`} href="/users/user3">Irene</Link></li>
        <li><Link className={`hover:text-blue-300 ${getLinkClass("/users/user4")}`} href="/users/user4">Helin</Link></li>
    </ul>
    
    </nav>
  )
}

export default NavBar
