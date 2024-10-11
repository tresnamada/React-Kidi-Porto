import React from 'react'
import Yuabah from '../assets/yuabah.jpeg'

const Hero = () => {
    return (
        <section id='about' className='py-20 bg-gray-500'>
            <div className='container mx-auto text-center px-6'>
                <h2 className='text-white py-2'>
                    Tentang Saya
                </h2>
                <div className='flex flex-col items-center mb-12'>
                    <img src={Yuabah} alt="" className='w-32 h-32 rounded-full object-cover mb-4 shadow-lg' />

                    <p className='text-lg text-white mb-2'>Student</p>
                    <p className='text-lg text-white font-semibold'>Im A Frontend Developer</p>

                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg-grid-cols-3 gap-8'>
                    <div className='bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-colors duration-300'>
                        <h3 className='text-2xl font-bold mb-4 text-gray-800'>Mobile Apps</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsum voluptas quaerat.</p>
                    </div>
                    <div className='bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-colors duration-300'>
                        <h3 className='text-2xl font-bold mb-4 text-gray-800'>Mobile Apps</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsum voluptas quaerat.</p>
                    </div>
                    <div className='bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-colors duration-300'>
                        <h3 className='text-2xl font-bold mb-4 text-gray-800'>Mobile Apps</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsum voluptas quaerat.</p>
                    </div>
                    <div className='bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-colors duration-300'>
                        <h3 className='text-2xl font-bold mb-4 text-gray-800'>Mobile Apps</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsum voluptas quaerat.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
