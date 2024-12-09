import React from 'react'

const Button = ({isVisible}) => {
  return (
    <div>
        {
            isVisible &&(
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold w-[500px] ml-10 mt-4 py-2 px-4 rounded'>
          login
        </button>

            )
        }
        
      <br/>
    </div>
  )
}

export default Button