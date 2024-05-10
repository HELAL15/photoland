import React, { memo } from 'react'

const Error404 = () => {



  return (
    <>
      <section>
        <div className='container mx-auto py-24 text-6xl'>
          <h1 className=' text-center'>404</h1>
          <p className='text-center text-gray-400'>Page Not Found</p>
        </div>
      </section>
    </>
  )
}

export default memo(Error404)
