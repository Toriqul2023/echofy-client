import { faLeaf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'

const Inside = () => {
  return (
    <div className=' py-[15%] '>
        <div className='w-[70%] flex justify-between mt-5 mx-auto'>
          <div  className='w-[50%]'>
                 
          </div>
            <div className='text-right'>
            <p className=' text-lg mb-5'>Natural Environment</p>
         <h1 className='text-6xl font-bold leading-[80px] mb-5'>Be Safe Control Environment</h1>
         <p>Professionally optimize interdependent intellectual interoperable connect best practices. Progressively  
         fabricate done</p>

         <div className='mt-[50px]'>
            <button className=' bg-[#49AF45] font-medium text-lg text-white py-[14px] px-[40px] mr-5 hover:bg-[#49AF45] border-2 border-[#49AF45]'>Let's talk <FontAwesomeIcon icon={faLeaf}/></button>
            <button className='  text-white px-[40px] text-lg py-[14px] hover:bg-[#49AF45] border-2 border-[#626B69]'>Read more</button>
         </div>
            </div>
       
        </div>
       
    </div>
  )
}

export default Inside