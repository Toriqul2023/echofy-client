import { faStar, faStarOfLife } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'

const FrontThreeColoumn = () => {
  return (
    <div style={{backgroundImage:`url('https://images.unsplash.com/photo-1573339607881-208e75e4b267?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`}} className=''>
     <div className='w-[60%] my-5 mx-auto flex items-center justify-between '>
         <div className='w-[50%] mr-[20px]'>
            <p className='my-5 text-[#0CF702]'><FontAwesomeIcon icon={faStarOfLife}/> Echofy Services</p>
            <h3 className='text-5xl font-bold my-5'>Pioneering Sustainable
            Energy Services.</h3>
         </div>
         <div className='w-[50%] ml-[20px] text-justify'>
              <p>Sometimes goods can arrive early when they being brought into the solution other times items need a place to be stored for short goods can arrive desig headquarters have enough space your needs.</p>
         </div>
     </div>
     <div className='w-[80%] ml-auto py-5 grid grid-cols-4  items-center'>
        <div className='border-2 border-white '>
        <div className="card shadow-xl">
  <figure className=" ">
    <Image
    height={
        500
    }
    width={500}
    style={{width:'100%',height:'200px'}}
      src="https://images.unsplash.com/photo-1621146027714-e8921770f8d0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Shoes"
      className="inline-block mx-auto" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
        <div>
            
        </div>
        

     </div>
    </div>
  )
}

export default FrontThreeColoumn