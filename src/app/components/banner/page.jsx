import Image from 'next/image'
import React from 'react'

export default function Banner() {
  return (
    <div className=  'py-10 px-20'     style={{
        background: "linear-gradient(90deg, #073879 0%, #75D3FE 100%)",
        height: "1358px",
      }}>
        <div className='container mx-auto text-white flex justify-between items-center'>
      <div>
        <h2 className="text-7xl font-bold">
          MALO <br /> AFRICA
        </h2>

        <p className='text-xl'>Buy, Sell, Connect. Grow your <br />
business across the world.</p>
      </div>

      <div>
       <Image
  src="/assets/img.png"
  width={623}
  height={598}
  alt="banner"
  style={{ borderRadius: "40px 40px 220px 220px" }}
/>

      </div>
    </div>
    </div>
  )
}
