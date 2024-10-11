import React from 'react'

const Contact = () => {
    return (
        <section className='py-20 bg-gray-100'>
            <div className='container mx-auto px-6 text-center'>
                <h2 className='text-4xl mb-8 text-gray-800'>Contact Us</h2>
                <p className='text-xl mb-4 text-gray-600'>Feel Free to leave me a message</p>
                <a href="mailto:tresnamada@gmail.com" className='bg-blue-500 text-white hover:bg-blue-400 font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300'>Send Mail</a>
            </div>
        </section>
    )
}

export default Contact
