import React, { memo } from 'react'
import useFetch from '../hooks/useFetch'

const Terms = () => {

  const {data} = useFetch('/terms')
  console.log(data);


  return (
    <>
      <section className='mt-40 lg:mt-10'>
        <div className='container mx-auto py-16'>
        <ul className='p-4'>
          {
          data?.map((Term)=>{
            return (
              <li className='py-5 ml-12 relative before:absolute before:-left-10 before:top-[30%] before:rounded-full before:content-[""] before:w-[30px] before:h-[30px] before:bg-accent' key={Term.id}>
                <p className='text-gray-400 text-2xl '>{Term.attributes.content}</p>
              </li>
            )
          })
        }
        </ul>
        </div>
      </section>
    </>
  )
}

export default memo(Terms)
