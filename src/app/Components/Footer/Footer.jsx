'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FacebookIcon, FacebookShareButton, TwitterShareButton } from 'next-share'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div style={{background:`url('https://html.ditsolution.net/echofy/assets/images/home1/footer-bg.jpg')`}} className='py-[50px] '>
        <div className='w-[70%] mx-auto pt-[50px]'>
            <div style={{background:`url('https://html.ditsolution.net/echofy/assets/images/home1/footer-social-bg.jpg')`,backgroundPosition:'center'}}
             className='w-[100%] h-[150px] flex justify-between items-center p-5'>
               <div  className=''>
                     <h3 className='text-4xl font-bold'>Stay With Our Social</h3>
               </div>
               <div className='flex justify-between'>
                        <div className='mr-5'><h3 className='text-xl font-semibold'>FOLLOW US:</h3></div>
                        <div>
                        <FacebookShareButton
                            url={'http://localhost:3000/'}>
                            <FacebookIcon className='mr-3' size={32} round />
                        </FacebookShareButton>
                        <FacebookShareButton
                            url={'http://localhost:3000/'}>
                            <FacebookIcon className='mr-3' size={32} round />
                        </FacebookShareButton>
                        <FacebookShareButton
                            url={'http://localhost:3000/'}>
                            <FacebookIcon className='mr-3' size={32} round />
                        </FacebookShareButton>
                        <FacebookShareButton
                            url={'http://localhost:3000/'}>
                            <FacebookIcon size={32} round />
                        </FacebookShareButton> 
                        </div>
                       
               </div>
            </div>
          <div>
          <footer className="footer  text-2xl-content py-10">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  <form>
    <h6 className="footer-title">Newsletter</h6>
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label>
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item" />
        <button className="btn bg-[#49AE44] text-white join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
          </div>

        </div>

    </div>
  )
}

export default Footer