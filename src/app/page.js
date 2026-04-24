'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import Animation from './components/Animation'
import Stagger from './components/Stagger'
import Timeline from './components/Timeline'
import Scrolltrigger from './components/Scrolltrigger'
import Practice from './components/Practice'

const page = () => {

  return (
    <>
    <Practice/>
    {/* <Animation/>
    <Stagger/>
    <Timeline/> */}
     
     <Scrolltrigger/>
    </>
  )
}

export default page
