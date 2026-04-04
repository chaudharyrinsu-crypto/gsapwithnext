'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const page = () => {
  const boxRef=useRef(null)
  useGSAP(()=>{
    gsap.to(boxRef.current,{x:200,duration:1})
  },[])
  return (
    <div ref={boxRef} className='box text-3xl font-bold flex justify-center items-center pt-50'>
      This is Home page
    </div>
  )
}

export default page
