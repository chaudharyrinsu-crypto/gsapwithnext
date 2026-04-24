import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Scrolltrigger = () => {
    const box1ref=useRef(null)
    const box2ref=useRef(null)
    const box3ref=useRef(null)
    

    useGSAP(()=>{
        gsap.from(box1ref.current,{
            scale:0,
            duration:1.5
        })
    })
    useGSAP(()=>{
        gsap.from(box2ref.current,{
            scale:0,
            duration:1.5,
            scrollTrigger:{
                trigger:box2ref.current,
                scroller:'body'
            }
        })
    })
  return (
    <div className='overflow-hidden'>
      <div className='h-screen w-screen bg-amber-300 flex items-center justify-center'>
        <div ref={box1ref} className='h-50 w-50 bg-blue-100'>box1</div>
      </div>
      <div className='h-screen w-screen bg-lime-300 flex items-center justify-center'>
        <div ref={box2ref} className='h-50 w-50 bg-blue-100'>box2</div>
      </div>
      <div className='h-screen w-screen bg-emerald-300 flex items-center justify-center'>
        <div ref={box3ref} className='h-50 w-50 bg-blue-100'>box3</div>
      </div>
    </div>
  )
}

export default Scrolltrigger
