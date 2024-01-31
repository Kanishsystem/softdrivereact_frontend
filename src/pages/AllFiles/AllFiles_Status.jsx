import React from 'react'

const AllFiles_Status = () => {
  const Zip_files = [
    { Zip_name: "Design Materials.Zip", Zip_size: "4.9MB" },
    { Zip_name: "Design Materials.Zip", Zip_size: "4.9MB" },
    { Zip_name: "Design Materials.Zip", Zip_size: "4.9MB" },
    { Zip_name: "Design Materials.Zip", Zip_size: "4.9MB" },
    { Zip_name: "Design Materials.Zip", Zip_size: "4.9MB" },
  ]
  return (
    <div className='AllFiles_Status'>
      <div className='columns'>
        <div className='column '>

          <div className="card">
            <div className="card-content">
              <p className="title is-flex is-justify-content-space-between">
                <span> 2 of 10 upload complete</span>
                <span><button className="delete"></button></span>
              </p>
              <p className="subtitle">
                Drag and Drop here to add more
              </p>
            </div>
            <hr />
            {Zip_files.map((item) =>
              <div className='AllFiles_Status_Zip_files is-flex is-justify-content-space-evenly is-align-content-center'>

                <span> <label className="checkbox"></label>
                  <input type="checkbox" /></span>
                <span><i className="fa fa-file" aria-hidden="true"></i></span>
                <span>{item.Zip_name}</span>
                <span>{item.Zip_size}</span>
                <span> <button className="button is-link is-light mb-4">Copy link</button></span>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  )
}

export default AllFiles_Status

