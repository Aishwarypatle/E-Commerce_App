import React from 'react'
import Navbar from '../components/Navbar'
import Annoucement from '../components/Annoucement'
import Slider from '../components/Slider'
import Categaries from '../components/Categaries'


const Home = () => {
  return (
    <div>
        <Annoucement/>
        <Navbar />
        <Slider/>
        <Categaries/>
    </div>
  )
}

export default Home
