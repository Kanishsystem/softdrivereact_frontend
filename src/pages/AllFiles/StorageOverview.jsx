import React from 'react'
import { MAIN_PIC } from '../../services/ImageService';
const StorageOverview = () => {
  const Details_Activities = [
    { documentsicon: <i class="fa fa-file pr-4" aria-hidden="true"></i>, document_title_name: " Document 223 files", documentnumbersGB: '760GB' },
    { documentsicon: <i class="fa fa-file pr-4" aria-hidden="true"></i>, document_title_name: " Document 223 files", documentnumbersGB: '760GB' },
    { documentsicon: <i class="fa fa-file pr-4" aria-hidden="true"></i>, document_title_name: " Document 223 files", documentnumbersGB: '760GB' },
    { documentsicon: <i class="fa fa-file pr-4" aria-hidden="true"></i>, document_title_name: " Document 223 files", documentnumbersGB: '760GB' },
    { documentsicon: <i class="fa fa-file pr-4" aria-hidden="true"></i>, document_title_name: " Document 223 files", documentnumbersGB: '760GB' },
    { documentsicon: <i class="fa fa-file pr-4" aria-hidden="true"></i>, document_title_name: " Document 223 files", documentnumbersGB: '760GB' },
  ]
  return (
    <div className='StorageOverview '>
      <div className="columns ">
        <div className="column is-flex  box m-1 is-justify-content-space-between ">
          <span>
            <i className="fa fa-arrow-right " aria-hidden="true"></i>
            <i className="fa fa-arrows pl-3" aria-hidden="true"></i></span>
          <span>
            <i className="fa fa-ellipsis-v  " aria-hidden="true"></i></span>
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
      <div className='columns is-multiline '>
        {Details_Activities.map((item) =>
          <div className='column is-12 card  ml-1 is-flex is-justify-content-space-between'>
            <div className=''>
              <i class="fa fa-file pr-4" aria-hidden="true"></i>
              {item.document_title_name}
            </div>
            <div>
              {item.documentnumbersGB}
            </div>
          </div>
        )}
      </div>
    </div >
  )
}
export default StorageOverview