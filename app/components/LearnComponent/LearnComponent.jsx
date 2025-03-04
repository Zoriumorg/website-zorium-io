import { heroSection } from '@/app/image'
import Image from 'next/image'
import React from 'react'
import Banner from './Banner'
import Welcome from './Welcome'
import UseCases from './UseCases'
import Activity from './Activity'

const LearnComponent = () => {
  return (
    <div>

      <Banner />
      <Welcome />
      <UseCases/>
      <Activity />

    </div >
  )
}

export default LearnComponent
