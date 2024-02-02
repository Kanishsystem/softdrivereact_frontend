import React from 'react'

const AllFilesSort_Last_Moditiod = () => {
    return (
        <div className='AllFilesSort_Last_Moditiod'>

            <div className="dropdown is-hoverable ">
                <div className="dropdown-trigger">
                    <button className="button-sort p-2 " aria-haspopup="true" aria-controls="dropdown-menu4">
                        <i className="fa fa-angle-double-down pr-2" aria-hidden="true"></i>
                        Sort :Last Modified
                        <i className="fa-solid fa-arrow-down-long pl-2"></i><span />
                        <span className="icon is-small">
                            <i className="fa fa-long-arrow-down" aria-hidden="true"></i>
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

export default AllFilesSort_Last_Moditiod
