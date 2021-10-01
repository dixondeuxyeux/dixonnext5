import React, { Fragment } from 'react'
import Image from 'next/image'

export default function Carousel() {
  return (
    <Fragment>
      <h2>{''}</h2>
      <div>
        <Image
          src='/images/kobe3.jpg'
          layout='responsive'
          width={1800}
          height={1152}
          alt='Kobe'
        />
      </div>
    </Fragment>
  )
}
