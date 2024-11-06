import React from 'react'

const Imgdisplay = () => {
  return (
    <div
      className="w-full h-[800px] bg-center bg-cover"
      style={{
        backgroundImage: 'url(https://cdn.pixabay.com/photo/2021/02/24/13/47/pc-6046539_1280.jpg)',
      }}
    >
     <div className="p-4 md:p-8 ">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-neutral-200 text-left shadow-lg mt-60 ml-20">
            LEAD FOCUS DATA <br />
            <span className="">SERVICE AR.</span>
          </h1>
        </div>
    </div>
  )
}

export default Imgdisplay;