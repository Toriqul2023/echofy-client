import { faEarth, faHandDots, faHandHolding, faHandPeace, faLeaf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './FrontAbout.css'
import Image from 'next/image'
import React from 'react'

const FrontAbout = () => {
  return (
    <div 
    style={{backgroundPosition:'center',
      backgroundSize:'cover',
      backgroundRepeat:'no-repeat',
      opcaity:'0.5',
      
     background:`url('https://cdn.pixabay.com/photo/2020/05/03/07/43/green-5124174_1280.jpg')`,backgroundPosition:'right',backgroundSize:'cover'}}
    className='py-[100px] relative'>
      <div className='w-[70%] mx-auto flex items-center justify-between py-5'>
      <div className='w-[50%] text-white py-5 relative'>
         <h1 className='text-5xl font-bold mt-5'>
          Environmental Sustainable
         Forever Green Future
         </h1>
         <div className='mt-[30px]'>
         <h3 className='text-2xl my-5 '>
         <FontAwesomeIcon className='mr-5 text-[#49AF45]' icon={faEarth}/> Economic Benifits 
         <p className='my-[20px] text-base '>Alternative innovation after ethical to network environmental whiteboard transparent growth natural done</p>
         </h3>
         <h3 className='text-2xl mt-5 '>
         <FontAwesomeIcon className='mr-5 text-[#49AF45]' icon={faHandPeace}/> Nonprofit Benifits 
         <p className=' my-5 text-base '>Alternative innovation after ethical to network environmental whiteboard transparent growth natural done</p>

         </h3>
         <button className='px-[40px] py-[14px] border-2 my-5 borde  border-2 border-[#49AF45] font-semibold'>More about <FontAwesomeIcon className='ml-2' icon={faLeaf} /></button>
         <Image className='absolute right-[40%] bottom-[50px]' src={'https://html.ditsolution.net/echofy/assets/images/home1/about-shape-2.png'} style={{width:'84px',height:'39px'}} height={500} width={500}/>
         </div>
        
      </div>
        {/* <div>
               <Image src={'https://html.ditsolution.net/echofy/assets/images/home1/about-thumb.png'} width={500} height={500} />
        </div> */}
     
      </div>
      
      <Image id='animatedleaf' className='absolute right-[10%] top-[80px]' style={{width:'97px',height:'97px'}} src={'https://html.ditsolution.net/echofy/assets/images/home1/about-shape-1.png'} height={500} width={500}/>
      
      </div>

  )
}

export default FrontAbout