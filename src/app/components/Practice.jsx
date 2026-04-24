import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Practice = () => {
  const boxRef = useRef(null)
  const boXRef = useRef(null)
  const firtparagraphscontainer = useRef(null)
  const box1Ref = useRef(null)
  const box2Ref = useRef(null)
  const box3Ref = useRef(null)
  const box4Ref = useRef(null)

  const boRef = useRef(null)

  useGSAP(() => {
    gsap.to(boXRef.current, {
      // scale: 0,
      rotate:360, 
      backgroundColor:'green',
      duration: 1.5,
      scrollTrigger: {
        trigger: boXRef.current,
        scroller: 'body',
        // markers:true,
        start:"top 50%",
        end:'top 40%',
        scrub:1,
        pin:true
      }
    })
  })
  useGSAP(() => {
    gsap.from(firtparagraphscontainer.current.querySelectorAll('p'), {
      y: -20,
      opacity: 0,
      color: 'green',
      stagger: 1,
      duration: 1
    })
  })

  let tl = gsap.timeline()
  useGSAP(() => {
    tl.to(box1Ref.current, {
      color: 'red',
      x: 100,
      duration: 1.5
    })
  })
  useGSAP(() => {
    tl.to(box2Ref.current, {
      color: 'red',
      x: 100,
      duration: 1.5
    })
  })
  useGSAP(() => {
    tl.to(box3Ref.current, {
      color: 'red',
      x: 100,
      duration: 1.5
    })
  })
  useGSAP(() => {
    tl.to(box4Ref.current, {
      color: 'red',
      x: 100,
      duration: 1.5
    })
  })


  useGSAP(() => {
    gsap.from(boRef.current, {
      scale: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: boRef.current,
        scroller: 'body'
      }
    })
  })
  return (
    <div className='overflow-x-hidden'>

      <div className='h-screen flex items-center justify-center'>
        <div ref={boxRef} className='h-[200px] w-[200px] bg-red-400'></div>
      </div>
      <div className='h-screen flex items-center justify-center'>
        <div ref={boXRef} className='h-[200px] w-[200px] bg-red-400'></div>
      </div>
      <div className='h-screen w-screen bg-lime-300 flex items-center justify-center'>
        <div ref={boRef} className='h-50 w-50 bg-blue-100'>box2</div>
      </div>
      <div ref={firtparagraphscontainer} >
        <p>1.Lorem ipsum dolor sit amet.</p>
        <p>2.Lorem ipsum dolor sit amet.</p>
        <p>3.Lorem ipsum dolor sit amet.</p>
        <p>4.Lorem ipsum dolor sit amet.</p>
      </div>
      <br />
      <div>
        <div ref={box1Ref}>Lorem ipsum dolor sit amet.</div>
        <div ref={box2Ref}>Lorem ipsum dolor sit amet.</div>
        <div ref={box3Ref}>Lorem ipsum dolor sit amet.</div>
        <div ref={box4Ref}>Lorem ipsum dolor sit amet.</div>
      </div>
    </div>
  )
}

export default Practice
