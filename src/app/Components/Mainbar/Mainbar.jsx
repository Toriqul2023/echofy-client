import React from 'react'
import Topbar from '../Topbar/Topbar'
import Navbar from '../Navbar/Navbar'
import Inside from './Inside'

const Mainbar = () => {
  return (
    <div className='mt-[-150px]'
     style=
     {{background:"url('https://cdn.pixabay.com/photo/2016/03/12/23/18/man-1253004_1280.jpg')",width:'100%',height:'957px',backgroundPosition:'top',backgroundRepeat:'no-repeat',WebkitBackgroundSize:'cover'}}>
        
       
        <Inside/>
    </div>
  )
}

export default Mainbar