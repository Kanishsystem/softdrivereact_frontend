import React from 'react'
import { MAIN_PIC } from '../../services/ImageService';
const StorageOverview = () => {


  
  return (
    <div className='StorageOverview '>
      <div className="columns ">
        <div className="column is-flex is-justify-content-space-between box m-1 ">

          <div className='column'>
            <i className="fa fa-arrow-right " aria-hidden="true"></i>
            <i className="fa fa-arrows pl-3" aria-hidden="true"></i>
          </div>
          <div className='column'>
            <i className="fa fa-ellipsis-v  " aria-hidden="true"></i>
          </div>
        </div>
      </div>


      <div className='columns'>
        <div className='column box ml-1'>
          Storage
          <div className='column ml-1'>
            <img className="StorageimageOverview" src={MAIN_PIC} alt="" height="150" width="200" />
          </div>
        </div>
      </div>
      <div className='columns'>
        <div className='column box ml-1'>
          <div className="tabs  ">
            <ul>
              <li className="is-active"><a>Details</a></li>
              <li><a>Activities</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='columns'>
        <div className='column box is-flex is-justify-content-space-between ml-1'>

          <div className='column'>
            <img className="StorageimageOverview p-2" src={MAIN_PIC} alt="" height="50" width="50" />
            Document 223 files
          </div>
          <span>
            760GB
          </span>
        </div>





      </div>


    </div >
  )
}

export default StorageOverview