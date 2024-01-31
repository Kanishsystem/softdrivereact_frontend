import React from 'react'
import "./Recyclebin.css"
const RecyleBin = () => {
  return (
    <div className="card-container is-flex is-flex-direction-column">
       <div className="trash-icon is-flex">   
                  <i class="fa fa-trash-o"></i>
               </div> 

          <div className="left-card">
                <div className="small-card">
                  </div>
                    <div className="pdf-card is-flex">
                      <h1 className="Pdf is-align-self-center">PDF</h1>
                    </div> 
          </div>
                <div className="is-flex is-direction-row">
                <h1 className="Next-cloud mx-5">Nextcloud M </h1>
                   <p className="paragraph">...</p>
                </div>
    
    </div>
  )
}

export default RecyleBin