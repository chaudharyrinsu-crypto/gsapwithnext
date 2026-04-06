'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import Animation from './components/Animation'
import Stagger from './components/Stagger'
import Timeline from './components/Timeline'
import ScrollTrigger from './components/ScrollTrigger'

const page = () => {

  return (
    <>
    {/* <Animation/>
    <Stagger/>
    <Timeline/> */}
     
     <ScrollTrigger/>
    </>
  )
}

export default page
