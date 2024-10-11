import React from 'react'
import Ywach from '../assets/yawch.jpg'

const Project = () => {
    return (
        <section id='project' className='py-20 bg-white'>
            <div className='container mx-auto text-center'>
                <h2 className='font-bold text-2xl mb-8'>Project Saya</h2>


                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className='bg-gray-100 p-4 rounded'>
                        <img src={Ywach} alt="" className='w-full h-48 object-cover mb-4 rounded' />
                        <h3 className='text-2xl font-bold mb-2'>SMKN 8 Semarang</h3>
                        <p className='text-gray-700'>Profile Website Portofolio</p>
                    </div>
                    <div className='bg-gray-100 p-4 rounded'>
                        <img src={Ywach} alt="" className='w-full h-48 object-cover mb-4 rounded' />
                        <h3 className='text-2xl font-bold mb-2'>SMKN 8 Semarang</h3>
                        <p className='text-gray-700'>Profile Website Portofolio</p>
                    </div>
                    <div className='bg-gray-100 p-4 rounded'>
                        <img src={Ywach} alt="" className='w-full h-48 object-cover mb-4 rounded' />
                        <h3 className='text-2xl font-bold mb-2'>SMKN 8 Semarang</h3>
                        <p className='text-gray-700'>Profile Website Portofolio</p>
                    </div>
                    <div className='bg-gray-100 p-4 rounded'>
                        <img src={Ywach} alt="" className='w-full h-48 object-cover mb-4 rounded' />
                        <h3 className='text-2xl font-bold mb-2'>SMKN 8 Semarang</h3>
                        <p className='text-gray-700'>Profile Website Portofolio</p>
                    </div>
                    <div className='bg-gray-100 p-4 rounded'>
                        <img src={Ywach} alt="" className='w-full h-48 object-cover mb-4 rounded' />
                        <h3 className='text-2xl font-bold mb-2'>SMKN 8 Semarang</h3>
                        <p className='text-gray-700'>Profile Website Portofolio</p>
                    </div>
                    <div className='bg-gray-100 p-4 rounded'>
                        <img src={Ywach} alt="" className='w-full h-48 object-cover mb-4 rounded' />
                        <h3 className='text-2xl font-bold mb-2'>SMKN 8 Semarang</h3>
                        <p className='text-gray-700'>Profile Website Portofolio</p>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Project
