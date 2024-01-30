import React from 'react'

const AllFiles_Uplodes = () => {
    return (
        <div className='AllFiles_Uplodes '>
            <div className="AllFiles-topnav  pt-2">
                <div class="dropdown is-hoverable ">
                    <div class="dropdown-trigger ">
                        <button class="Uploderbtn" aria-haspopup="true" aria-controls="dropdown-menu4">
                            <i class="fa fa-cloud-upload pr-1" aria-hidden="true"></i>
                            <span>Upload</span>
                            <span class="icon is-small">
                                <i class="fa fa-chevron-circle-down pl-3" aria-hidden="true"></i>
                            </span>
                        </button>
                    </div>
                    <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                        <div class="dropdown-content">
                            <div class="dropdown-item">
                                <a class="navbar-item">
                                    Folder
                                </a>
                                <a class="navbar-item">
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
