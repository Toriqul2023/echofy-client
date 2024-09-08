import { faCheck, faTree } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'

const FrontSkills = () => {
  return (
    <div style={{background:'https://cdn.pixabay.com/photo/2016/03/22/13/39/earth-1272884_1280.jpg'}}  className='text-white py-[100px]'>
        <div className='w-[70%] grid grid-cols-2 mx-auto justify-between '>
                 <div className=''>
                        <p className='my-[50px] text-[#4AAF46]'><FontAwesomeIcon icon={faTree}/> Our Skills</p>
                        <h3 className='text-5xl font-bold my-5'>
                        Getting A Greener Future
                        Safe Environment

                        </h3>
                        <p className='my-[50px]'>Competently cultivate worldwide e-tailers through
                             
                             principle-centered value professionally engineer high-payoff deliverables
                              without exceptional processes. Rapidiously network cost effective vortals
                        </p>
                        <div className='mt-5'>
                            <button className='btn bg-white mr-5 border-none shadow-2xl  rounded-lg'> <FontAwesomeIcon className='text-2xl inline-block  mr-3' icon={faCheck} /> Safe Environment</button>
                            <button className='btn bg-white border-none shadow-2xl  rounded-lg'><FontAwesomeIcon className='text-2xl inline-block  mr-3' icon={faCheck} />  Dirty Recycling</button>
                        </div>
                 </div>
                 <div className='relative justify-end'>
                    <Image className='absolute top-[50px]'

                    style={{width:'200px'}}
                     src={'https://html.ditsolution.net/echofy/assets/images/home1/skill-shape-1.png'} 
                     height={500} width={500} />
                    <Image style={{width:'100%',filter:'drop-shadow(10px white)'}} src={'https://html.ditsolution.net/echofy/assets/images/home1/skill-thumb.png'} width={500} height={500}/>
                 </div>
        </div>

    </div>
  )
}

export default FrontSkills