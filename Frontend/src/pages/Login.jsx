import React from 'react'
import Button from '../components/Button'

const Login = () => {
    return (
        <>
            <div className='container mx-auto mt-10 ml-96'>

                <div className='w-[600px] h-[350px] border-[1px]'>
                    <form action="#">
                        <h1 className='text-2xl font-bold text-center p-3 border-b-2'>Login</h1>

                        <div className='flex-col ml-10 mt-2'>
                            <p htmlFor="email" className='text-xl '>Email</p>
                            <input type="text" className='border-[0.125rem] p-2 w-[31.25rem] mt-3' />
                        </div>
                        <div className='flex-col ml-10 mt-2'>
                            <p htmlFor="email" className='text-xl '>password</p>
                            <input type="text" className='border-[0.125rem] p-2 w-[31.25rem] mt-3' />
                        </div>
                        <Button isVisible={true}/>
                    </form>
                </div>

            </div>

        </>
    )
}

export default Login