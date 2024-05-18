import React from 'react'
import AboutUs from '../../../components/about/AboutUs'
import CallToAction from '../../../components/calltoaction/CallToAction'
import Services from '../../../components/services/Services'

const page = () => {
  return (
    <div>
        <AboutUs />
        <Services />
        <br />
        <CallToAction />
    </div>
  )
}

export default page