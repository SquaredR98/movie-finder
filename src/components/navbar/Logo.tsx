import Image from 'next/image'
import React from 'react'
import { gradientText } from '../../lib/utils'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className='h-12 flex items-center'>
      <Image className='w-6 h-6 md:w-10 md:h-10' src="/movie.svg" alt='Logo' height={100} width={100} />
      <div className='ml-2 md:ml-4'>
        <h3 className={`${gradientText} text-xl md:text-2xl font-bold leading-none`}>Movie</h3>
        <p className='text-xs md:text-base text-white font-extralight tracking-widest text-center leading-none'>FINDER</p>
      </div>
    </Link>
  )
}
