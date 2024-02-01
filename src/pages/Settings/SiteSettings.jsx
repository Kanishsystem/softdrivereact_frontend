import React from 'react'
import { SmartSoftInput } from 'soft_digi';
import './sitestyles.css';

const SiteSettings = () => {
  return (

    <>
    <div className='container'>
      <div className='columns'>
        <div className='column is-6'>
         <div className='card'>
          <div className="card-content ">
            <div className='is-flex is-justify-content-space-between mb-2'>
           
              <div className='is-size-6'>URL/IP Address</div>
              <SmartSoftInput />
            </div>
            <div className='is-flex is-justify-content-space-between mb-2'>
           
           <div className='is-size-6'>Title</div>
           <SmartSoftInput />
         </div>
         <div className='is-flex is-justify-content-space-between mb-2'>
           
           <div className='is-size-6'>Short Name</div>
           <SmartSoftInput />
         </div>
         <div className='is-flex is-justify-content-space-between mb-2'>
           
           <div className='is-size-6'>Theme</div>
           <SmartSoftInput />
         </div>
         <div className='is-flex is-justify-content-space-between mb-2'>
           
           <div className='is-size-6'>Footer</div>
           <SmartSoftInput />
         </div>
           
           

          </div>
          </div>

         </div>
        </div>
        <div className='column is-6' >
          
        </div>
      </div>
   


    </>

    
);


  
  
}

export default SiteSettings