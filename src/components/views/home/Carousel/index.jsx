import React from 'react'
import CardCarousel from '../CardCarousel'

function Carousel() {
  return (
    <div>
        <div className="flex justify-center xl:pb-40 md:pb-28 pb-8 bg-[#f9f8f8]">
            <div className="xl:w-[1200px] w-[90%]">
            <h1 className='text-center my-8 font-semibold text-4xl'>Few words from our clints</h1>
                <CardCarousel />
            </div>
        </div>
    </div>
  )
}

export default Carousel