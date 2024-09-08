import { faArrowLeft, faArrowRight, faLeaf, faRightLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'

const FrontServices = () => {
  return (
    <div 
    style={{background:`url('https://html.ditsolution.net/echofy/assets/images/home1/service-bg.jpg')`,backgroundSize:'cover',backgroundRepeat:'no-repeat'}} 
    className='text-black py-[100px]'>
     <div className='w-[70%] mx-auto py-5'>
      <div className='top flex justify-between '>
        <div className='w-[50%]'>
        <p className='text-xl'> <FontAwesomeIcon icon={faLeaf}/> Our Services</p>
         <h3 className='text-4xl font-bold my-5 leading-[50px] mb-0'>Echofy Provide Environment
         Best Leading Services</h3>
        </div>
       <div className='self-end'>

        <FontAwesomeIcon  style={{fontSize:'20px'}} className='bg-[#E6E7E9] px-[20px] text-[#818282]   py-[20px] mr-4' icon={faArrowLeft}/>
        <FontAwesomeIcon style={{fontSize:'20px'}} className='bg-[#E6E7E9] px-[20px] text-[#818282]  py-[20px] ' icon={faArrowRight}/>
       </div>
      </div>
      <div className="grid grid-cols-3 mt-[50px] gap-5 pb-[100px]">
        <div className='p-[35px]  bg-[#F7F6EE] relative '>
          <Image style={{height:'89px',width:'89px'}} src={`https://html.ditsolution.net/echofy/assets/images/home1/service-icon1.png`} height={500} width={500}/>
          <div className='content'>
                 <h3 className='text-[26px] font-[600] my-5'>Dirty Cleaning</h3>
                 <p className='mb-[100px] text-justify'>Alternative innovation to ethical network environmental whiteboard transparenes natural to environment</p>
                 <Image style={{width:'326px',height:'195px'}} className='absolute bottom-[-80px] inline-block right-[50px]' src={'https://html.ditsolution.net/echofy/assets/images/home1/service-3.jpg'} height={500} width={500}/>
          </div>
        </div>
        <div className='p-[35px]  bg-[#F7F6EE] relative '>
          <Image style={{height:'89px',width:'89px'}} src={`https://html.ditsolution.net/echofy/assets/images/home1/service-icon1.png`} height={500} width={500}/>
          <div className='content'>
                 <h3 className='text-[26px] font-[600] my-5'>Cleaning Ocean</h3>
                 <p className='mb-[100px] text-justify'>Alternative innovation to ethical network environmental whiteboard transparenes natural to environment</p>
                 <Image style={{width:'326px',height:'195px'}} className='absolute bottom-[-80px] inline-block right-[50px]' src={'https://html.ditsolution.net/echofy/assets/images/home1/service-2.jpg'} height={500} width={500}/>
          </div>
        </div>
        <div className='p-[35px]  bg-[#F7F6EE] relative '>
          <Image style={{height:'89px',width:'89px'}} src={`https://html.ditsolution.net/echofy/assets/images/home1/service-icon1.png`} height={500} width={500}/>
          <div className='content'>
                 <h3 className='text-[26px] font-[600] my-5'>Cleaning Ocean</h3>
                 <p className='mb-[100px] text-justify'>Alternative innovation to ethical network environmental whiteboard transparenes natural to environment</p>
                 <Image style={{width:'326px',height:'195px'}} className='absolute bottom-[-80px] inline-block right-[50px]' src={'https://html.ditsolution.net/echofy/assets/images/home1/service-1.jpg'} height={500} width={500}/>
          </div>
        </div>

      </div>
     </div>
    </div>
  )
}

export default FrontServices