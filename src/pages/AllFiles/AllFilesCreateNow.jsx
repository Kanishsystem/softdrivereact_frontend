import React from 'react'

const AllFilesCreateNow = () => {
    return (
        <div className='AllFiles_Create_now'>
            <div className="dropdown is-hoverable ml-4">
                <div className="dropdown-trigger pt-2">
                    <button className="buttonx  " aria-haspopup="true" aria-controls="dropdown-menu4">
                        <span>
                            <i className="fa fa-plus pr-1" aria-hidden="true"></i>
                            Create now
                        </span>
                        <span className="icon is-small">
                            <i className="fa fa-chevron-circle-down pl-2" aria-hidden="true"></i>
                        </span>
                    </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                    <div className="dropdown-content">
                        <div className="dropdown-item">
                            <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AllFilesCreateNow
