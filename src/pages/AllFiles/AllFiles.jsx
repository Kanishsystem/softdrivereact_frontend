import React from 'react'

const AllFiles = () => {
    return (
        <div>
            <div className="columns ">
                <div className="column is-12 has-background-light is-flex m-4">
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link is-size-5">
                            <strong> My porta</strong>
                        </a>
                        <div className="navbar-dropdown">
                            <a className="navbar-item">
                                About
                            </a>
                            <a className="navbar-item">
                                Jobs
                            </a>
                            <a className="navbar-item">
                                Contact
                            </a>
                        </div>
                    </div>
                    <div className="navbar-item has-dropdown is-hoverable ">
                        <a className="navbar-link">
                            Brand Guideline
                        </a>

                        <div className="navbar-dropdown">
                            <a className="navbar-item">
                                About
                            </a>
                            <a className="navbar-item">
                                Jobs
                            </a>
                            <a className="navbar-item">
                                Contact
                            </a>
                        </div>
                    </div>
                    <div className='column is-flex is-justify-content-end'>
                        <div className='listicon m-2 '>
                            <i class="fa-solid fa-bars"></i>
                        </div>
                        <div className='alerticon m-2'>
                            <i className="fa-solid fa-circle-exclamation"></i>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default AllFiles
