import React from 'react'

const AllFiles_Uplodes = () => {
    return (
        <div className='AllFiles_Uplodes '>
            <div className="AllFiles-topnav  pt-2">
                <div className="dropdown is-hoverable ">
                    <div className="dropdown-trigger ">
                        <button className="Uploderbtn" aria-haspopup="true" aria-controls="dropdown-menu4">
                            <i className="fa fa-cloud-upload pr-1" aria-hidden="true"></i>
                            <span>Upload</span>
                            <span className="icon is-small">
                                <i className="fa fa-chevron-circle-down pl-3" aria-hidden="true"></i>
                            </span>
                        </button>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                        <div className="dropdown-content">
                            <div className="dropdown-item">
                                <a href='##' className="navbar-item">
                                    Folder
                                </a>
                                <a href='##' className="navbar-item">
                                    File
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllFiles_Uplodes
