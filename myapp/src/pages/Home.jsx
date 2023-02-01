import React from 'react'
import Navbar from '../components/Navbar'
import Annoucement from '../components/Annoucement'
import Slider from '../components/Slider'
import Categaries from '../components/Categaries'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'


const Home = () => {
  return (
    <div>
        <Annoucement/>
        <Navbar />
        <Slider/>
        <Categaries/>
        <Products/>
        <Newsletter />
    </div>
  )
}

export default Home
