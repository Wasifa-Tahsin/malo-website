import Image from 'next/image'
import React from 'react'

export default function Banner() {
  return (
    <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
      <div>
        <h2 className="text-4xl font-bold">
          MALO <br /> AFRICA
        </h2>
      </div>

      <div>
        <Image 
          src={''} 
          width={623} 
          height={598} 
          alt="banner" 
        />
      </div>
    </div>
    </div>
  )
}
