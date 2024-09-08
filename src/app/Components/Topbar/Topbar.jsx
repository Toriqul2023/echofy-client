import { faBrain, faEnvelope,  faMap, faPhone, faShare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Topbar.css'

const Topbar = () => {
  return (
    <div className='hidden lg:block w-full py-3 border border-[#79B900] fixed top-0  '>
        <div className='w-[70%] mx-auto flex justify-between items-center'>
             <div className='flex text-sm'>
                  <p className='mr-5'><FontAwesomeIcon className='mr-2 text-[#79B900]' icon={faEnvelope}/>example@gmail.com</p>
                  <p className='mr-5'><FontAwesomeIcon className='mr-2 text-[#79B900]' icon={faMap}/> New Market - Califonia</p>
                  <p><FontAwesomeIcon className='mr-2 text-[#79B900]' icon={faPhone}/>+880 320 432 242</p>
             </div>
             <div>
                <span id="special-before" className='mr-3 inline-block'>Follow social</span>
                      <FontAwesomeIcon icon={faShare}/>

                  
             </div>
        </div>
    </div>
  )
}

export default Topbar