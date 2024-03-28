import React from 'react'
import { FaInstagram, FaLinkedin, FaGithub , FaCrown } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';

export default function SocialIcons() {
  return (
    <div className='flex p-9 gap-5'>
                <Link href='https://www.instagram.com/'>
                <FaInstagram />
                </Link>

                <Link href=' https://twitter.com/home'>
                <FaXTwitter />
                </Link>

                <Link href='https://www.linkedin.com/login'>
                <FaLinkedin />
                </Link>

                <Link href='https://github.com/'>
                <FaGithub />
                </Link>

                <Link href='' className='flex items-center gap-2 hover:bg-blue-900 bg-slate-900'>
                <span>Subscribe</span>
                <FaCrown />
                
                </Link>
              </div>
  )
}
