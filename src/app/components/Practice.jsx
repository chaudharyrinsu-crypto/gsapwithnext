import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const Practice = () => {
  const boxRef = useRef(null)
  const firtparagraphscontainer = useRef(null)
  const box1Ref = useRef(null)
  const box2Ref = useRef(null)
  const box3Ref = useRef(null)
  const box4Ref = useRef(null)
  useGSAP(() => {
    gsap.fromTo(boxRef.current, {
      x: 200,
      duration: 2,
      opacity:0,
      
    },
    {
      opacity:1,
      x:0,
    }
  )
  })
  useGSAP(() => {
    gsap.from(firtparagraphscontainer.current.querySelectorAll('p'), {
      y: -20,
      opacity:0,
      color:'green',
      stagger:1,
      duration:1
    })
  })
 
  let tl=gsap.timeline()
  useGSAP(()=>{
    tl.to(box1Ref.current,{
      color:'red',
      x:100,
      duration:1.5
    })
  })
  useGSAP(()=>{
    tl.to(box2Ref.current,{
      color:'red',
      x:100,
      duration:1.5
    })
  })
  useGSAP(()=>{
    tl.to(box3Ref.current,{
      color:'red',
      x:100,
      duration:1.5
    })
  })
  useGSAP(()=>{
    tl.to(box4Ref.current,{
      color:'red',
      x:100,
      duration:1.5
    })
  })
  return (
    <div className='overflow-x-hidden'>
      <div ref={boxRef} className='h-[200px] w-[200px] bg-red-400'></div>
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
