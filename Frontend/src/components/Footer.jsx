import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            <div>
            <h1 className='text-3xl'>My Shop</h1>
                <p className='w-full md:w-2/3 text-gray-600'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quibusdam illo debitis dolore nulla repellendus ducimus iste amet eius rem labore facilis impedit vero error, corporis eum nesciunt laboriosam. Ratione.
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                 <li>+977-9844703218</li>
                 <li>contact@abcg.com</li>
                </ul>

            </div>

        </div>

       <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copy right2024@ forever.com -All Right Reserve</p>
       </div>


    </div>
  )
}

export default Footer