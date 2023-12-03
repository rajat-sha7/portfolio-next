import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


export default function header() {
  return (
    <footer  className='footer '>
    <div className='footer-container container'>
    <div className='footer__logo'>
    {/* <Link href='/'> <Image src={Avatar} alt="avatar" height={76} width={76}/></Link> */}
   @copyrights by sharma 2023
    </div>
       </div>
    </footer>
  )
}
