import React from 'react'
import Ywach from '../assets/yawch.jpg'

const Hero = () => {
    return (
        <section className='bg-cover bg-center h-screen text-white' style={{ backgroundImage: `url(${Ywach})` }}>
            <div className='bg-black bg-opacity-60 h-full flex flex-col justify-center items-center text-center p-6'>
                <h2 className='text-5xl font-bold mb-4'>Erlangga</h2>
                <p className='text-2xl mb-8'>Student I Front End Developer</p>
                <a href="" className='bg-blue-300 text-white hover:bg-blue-400 font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300'>Project</a>
            </div>
        </section>
    )
}

export default Hero
