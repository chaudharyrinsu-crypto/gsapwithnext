import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { use, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Scrolltrigger = () => {
  const parentRef = useRef(null)
  const box1ref = useRef(null)
  const box2ref = useRef(null)
  const box3ref = useRef(null)
  const grayBox = useRef(null)
  const grayParent = useRef(null)


  useGSAP(() => {
    gsap.fromTo(box1ref.current, {
      scale: 0,
    },
      {
        scale: 1.5,
        rotate: 360,
        scrollTrigger: {
          trigger: parentRef.current,
          scroller: 'body',
          scrub: 2,
          markers: true,
          start: 'top top',
          end: 'top -150%',
          pin: true
        }
      }
    )
  })
  useGSAP(() => {
    gsap.from(box2ref.current, {
      scale: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: box2ref.current,
        scroller: 'body',
        // markers:true,
        start: 'top 60%',
        end: 'top 30%',
        scrub: 2
      }
    })
  })

  useGSAP(()=>{
    gsap.to(grayBox.current,
      {
        transform:'translateX(-120%)',
        scrollTrigger:{
          trigger:grayParent.current,
          scroller:'body',
          scrub:2,
          pin:true,
          markers:true,
          start:'top 0%',
          end:'top -150%'
        }
      }
    )
  })
  return (
    <div className='overflow-hidden'>
      <div ref={parentRef} className='h-screen w-screen bg-amber-300 flex items-center justify-center'>
        <div ref={box1ref} className='h-50 w-50 bg-blue-100'>box1</div>
      </div>
      <div className='h-screen w-screen bg-lime-300 flex items-center justify-center'>
        <div ref={box2ref} className='h-50 w-50 bg-blue-100'>box2</div>
      </div>
      <div ref={grayParent} className='h-screen bg-amber-200'>
        <div ref={grayBox} className='text-[500px] '>Development</div>
      </div>
      <div className='h-screen w-screen bg-emerald-300 flex items-center justify-center'>
        <div ref={box3ref} className='h-50 w-50 bg-blue-100'>box3</div>
      </div>
    </div>
  )
}

export default Scrolltrigger
