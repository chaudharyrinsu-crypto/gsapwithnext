'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

const Timeline = () => {
    
  const firstRef = useRef(null)
  const secondRef = useRef(null)
  const thirdRef = useRef(null)
  useGSAP(() => {
    gsap.to(firstRef.current, {
      x: 1000,
      duration: 1.5,
      delay: 0.5
    })
  })
  useGSAP(() => {
    gsap.to(secondRef.current, {
      x: 1000,
      duration: 1.5,
      delay: 2
    })
  })
  useGSAP(() => {
    gsap.to(thirdRef.current, {
      x: 1000,
      duration: 1.5,
      delay: 3.5
    })
  })

  const tl = gsap.timeline()
  const first = useRef(null)
  const second = useRef(null)
  const third = useRef(null)
  useGSAP(() => {
    tl.to(first.current, {
      x: 1000,
      duration: 1.5
    })
  })

  useGSAP(() => {
    tl.to(second.current, {
      x: 1000,
      duration: 1.5
    })
  })
  useGSAP(() => {
    tl.to(third.current, {
      x: 1000,
      duration: 1.5
    })
  })
  return (
    <>
       <div className='mt-10'>
        <h2 ref={firstRef} className='bg-amber-200 w-50 h-50 '>fist</h2>
        <h2 ref={secondRef} className='bg-sky-500 w-50 h-50 '>second</h2>
        <h2 ref={thirdRef} className='bg-green-400 w-50 h-50 '>third</h2>
      </div>

      <div className='mt-10'>
        <h2 ref={first} className='bg-amber-200 w-50 h-50 '>fist</h2>
        <h2 ref={second} className='bg-sky-500 w-50 h-50 '>second</h2>
        <h2 ref={third} className='bg-green-400 w-50 h-50 '>third</h2>
      </div>
    </>
  )
}

export default Timeline
