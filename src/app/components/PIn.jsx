import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const PIn = () => {
    const parentRef = useRef(null)
    const headingRef = useRef(null)
    useGSAP(() => {
        gsap.to(headingRef.current, {
            transform: 'translateX(-235%)',
            // duration: 1,
            scrollTrigger: {
                trigger: parentRef.current,
                scroller: 'body',
                markers: true,
                start:'top 0%',
                end:'top -150%',
                scrub:2,
                pin:true
                
            }
        })
    })
    return (
        <>
            <div ref={parentRef} className='bg-fuchsia-400 h-full w-full'>
                <h1 ref={headingRef} className=' text-[400px] whitespace-nowrap'>FROTEND DEVELOPER</h1>
            </div>
        </>
    )
}

export default PIn
