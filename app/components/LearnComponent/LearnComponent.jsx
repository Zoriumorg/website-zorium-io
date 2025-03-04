import { heroSection } from '@/app/image'
import Image from 'next/image'
import React from 'react'
import Banner from './Banner'
import Welcome from './Welcome'
import UseCases from './UseCases'
import ZorStore from './ZorStore'
import Learn from './Learn'
import Ecosystem from './Ecosystem'

const LearnComponent = () => {
  return (
    <div>

      <Banner />
      <Welcome />
      <UseCases/>
      <ZorStore />
      <Learn/>
      <Ecosystem/>

    </div >
  )
}

export default LearnComponent
