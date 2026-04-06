'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const Animation = () => {
    const firstboxRef = useRef(null)
    useGSAP(() => {
        gsap.fromTo(firstboxRef.current, {
            opacity: 0
        },
            {
                x: 500,
                color: 'red',
                opacity: 1, duration: 1.5
            }
        )
    })
    const boxRef = useRef(null)
    useGSAP(() => {
        gsap.to(boxRef.current, {
            x: 1000,
            color: 'white',
            backgroundColor: 'skyblue',
            borderRadius: '50%',
            rotate: 360,
            duration: 2,
            repeat: 1, // repeat twice
            yoyo: true //reverse in same direction
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
    return (
        <div>
            <div ref={firstboxRef} className='flex items-center justify-center font-bold bg-amber-200 w-50 h-50 overflow-hidden'>
                <div className=''>homePage</div>
            </div>
            <div ref={boxRef} className='flex items-center justify-center font-bold bg-amber-200 w-50 h-50 overflow-hidden'>
                <div className=''>homePage</div>
            </div>
        </div>
    )
}

export default Animation
