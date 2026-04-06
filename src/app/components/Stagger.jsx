'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

const Stagger = () => {
    // stagger
    const headingref = useRef(null)
    useGSAP(() => {
        gsap.from(headingref.current.querySelectorAll('h1'), {
            opacity: 0,
            y: 20,
            duration: 1,
            delay: 1,
            // stagger: 1, animate one by one from first
            stagger: -1, //animate one by one from last
            color: 'red'
        })
    })
    return (
        <>
            <div ref={headingref} className='mt-10'>
                <h1 className='text-xl'>this is 1 home page</h1>
                <h1 className='text-xl'>this is 2 home page</h1>
                <h1 className='text-xl'>this is 3 home page</h1>
            </div>
        </>
    )
}

export default Stagger
