'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

const page = () => {
  const boxRef = useRef(null)
  useGSAP(() => {
    gsap.to(boxRef.current, {
      x: 1000,
      color: 'white',
      backgroundColor: 'skyblue',
      borderRadius: '50%',
      rotate: 360,
      duration: 2,
      repeat:1, // repeat twice
      yoyo:true //reverse in same direction
      // repeat:-1 repeat infinitely
      // opacity:0
      // delay:2
    })
  })
  // useGSAP(() => {
  //   gsap.from(boxRef.current, {
  //     x: 1000,
  //     color: 'red',
  //     backgroundColor:'gray',
  //     borderRadius:20,
  //     duration: 2,
  //     delay:2,
  // opacity:0
  //   })
  // })

  // useEffect(()=>{
  //   gsap.to(boxRef.current,{
  //     x:1000,
  //     color:'red',
  //     duration:2
  //   })
  // })

  const headingref = useRef(null)
  useGSAP(() => {
    gsap.from(headingref.current.querySelectorAll('h1'), {
      opacity: 0,
      y: 20,
      duration: 1,
      delay:1,
      // stagger: 1,
      stagger: -1,
      color:'red'
    })
  })
  return (
    <>
      <div ref={boxRef} className='flex items-center justify-center font-bold bg-amber-200 w-[200px] h-[200px] overflow-hidden'>
        <div className=''>homePage</div>
      </div>
      <div ref={headingref} className='mt-10'>
        <h1 className='text-xl'>this is 1 home page</h1>
        <h1 className='text-xl'>this is 2 home page</h1>
        <h1 className='text-xl'>this is 3 home page</h1>
      </div>
    </>
  )
}

export default page
