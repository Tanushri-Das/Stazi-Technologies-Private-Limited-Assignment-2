import React from 'react'
import PropertyList from '../../Components/PropertyList/PropertyList'

const Home = () => {
  return (
    <div>
        <h1 className='fw-bold fs-1 mb-2'>Featured Listed Property</h1>
        <p className='fs-5 fw-semibold'>Real estate can be bought, sold, leased, or rented, and can be a <br /> valuable investment opportunity. The value of real estate can be...</p>
        <PropertyList/>
    </div>
  )
}

export default Home