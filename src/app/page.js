'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import Animation from './components/Animation'
import Stagger from './components/Stagger'
import Timeline from './components/Timeline'
import Scrolltrigger from './components/Scrolltrigger'
import Practice from './components/Practice'
import PIn from './components/PIn'

const page = () => {

  return (
    <div className='overflow-x-hidden '>
    <Practice/>
    {/* <Animation/>
    <Stagger/>
    <Timeline/> */}
     <PIn/>
     <Scrolltrigger/>
    </div>
  )
}

export default page
