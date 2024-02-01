import React from 'react'
import { SmartSoftCheckRadioSwitch } from 'soft_digi';
const AllFiles_Status = () => {
  const options = [
    { value: '3', label: '' },
  ]
  const Zip_files = [
    { Zip_name: "Design Materials.Zip", Zip_size: "4.9MB" },
    { Zip_name: "Design Materials.Zip", Zip_size: "4.9MB" },
    { Zip_name: "Design Materials.Zip", Zip_size: "4.9MB" },
    { Zip_name: "Design Materials.Zip", Zip_size: "4.9MB" },
  ]
  return (
    <div className='AllFiles_Status'>

      <div className='column '>
        <div className="card p-5 ">
          <div className="card-content">
            <p className="title is-flex is-justify-content-space-between">
              <span className='is-size-4'> 2 of 10 upload complete</span>
              <span className='Delete_Option_btn'><button className="delete"></button></span>
            </p>
            <p className="subtitle is-size-6">
              Drag and Drop here to add more
              <hr />
            </p>
          </div>
          {Zip_files.map((item) =>
            <div className='AllFiles_Status_Zip_files is-flex is-justify-content-space-evenly is-align-content-center'>

              <span> <label className="checkbox ">
                <SmartSoftCheckRadioSwitch
                  options={options}
                />
              </label>
              </span>
              <span><i className="fa fa-file pl-3 has-text-danger" aria-hidden="true"></i></span>
              <span className='AllFiles_Status_Document_text pl-3'>{item.Zip_name}</span>
              <span className='AllFiles_Status_Document_text pl-3'>{item.Zip_size}</span>
              <span> <button className="button is-link is-light mb-4 is-small p-1">Copy link</button></span>
              <hr />
            </div>
          )}
          <footer className="card-footer is-flex is-justify-content-space-between pt-5 ">

            <span className='broblem_text'>  Having problem? Please contact <a href=''>Support</a></span>
            <span> <button className="button is-link is-hovered is-small">Add more</button></span>
          </footer>
        </div>
      </div>
    </div>
  )
}
export default AllFiles_Status

