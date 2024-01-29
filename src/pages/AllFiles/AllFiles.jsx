import React from 'react'
import './AllFile.css';
import { MAIN_PIC } from '../../services/ImageService';
import StorageOverview from './StorageOverview';

const AllFiles = () => {


    const items = [
        { img: { MAIN_PIC }, title: "Media report-Nov 2023" },
        { img: { MAIN_PIC }, title: "Media report-Nov 2023" },
        { img: { MAIN_PIC }, title: "Media report-Nov 2023" },
    ]

    const Folder_items = [
        { icon_one: <i className="fa fa-file-code-o  " aria-hidden="true"></i>, textFoder: " Work Documents", icon_two: <i className="fa fa-ellipsis-v  " aria-hidden="true"></i> },
        { icon_one: <i className="fa fa-file-code-o  " aria-hidden="true"></i>, textFoder: " Work Documents", icon_two: <i className="fa fa-ellipsis-v  " aria-hidden="true"></i> },
        { icon_one: <i className="fa fa-file-code-o  " aria-hidden="true"></i>, textFoder: " Work Documents", icon_two: <i className="fa fa-ellipsis-v  " aria-hidden="true"></i> },
        { icon_one: <i className="fa fa-file-code-o  " aria-hidden="true"></i>, textFoder: " Work Documents", icon_two: <i className="fa fa-ellipsis-v  " aria-hidden="true"></i> },
        { icon_one: <i className="fa fa-file-code-o  " aria-hidden="true"></i>, textFoder: " Work Documents", icon_two: <i className="fa fa-ellipsis-v  " aria-hidden="true"></i> },
        { icon_one: <i className="fa fa-file-code-o  " aria-hidden="true"></i>, textFoder: " Work Documents", icon_two: <i className="fa fa-ellipsis-v  " aria-hidden="true"></i> },

    ]
    return (
        <div className='AllFiles-Frampage'>
            <div className='columns'>
                <div className="column is-8 ">
                    <div className="columns ">
                        <div className="column is-12 has-background-light is-flex ">
                            <div class="navbar-item has-dropdown is-hoverable">
                                <a class="navbar-link is-size-5">
                                    My Drive
                                </a>
                                <div class="navbar-dropdown">
                                    <a class="navbar-item">
                                        About
                                    </a>
                                    <a class="navbar-item">
                                        Jobs
                                    </a>
                                    <a class="navbar-item">
                                        Contact
                                    </a>
                                </div>
                            </div>
                            <div className='column is-flex is-justify-content-end'>
                                <div className='listicon p-2 '>
                                    <i class="fa fa-bars" aria-hidden="true"></i>
                                </div>
                                <div className='alerticon p-2'>
                                    <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="columns  ">
                        <div className="column is-12 box is-flex">
                            <div className="AllFiles-topnav  pt-2">
                                <div className=" file is-info">
                                    <label>
                                        <input className="file-input" type="file" name="resume" />
                                        <span className="file-cta">
                                            <span className="file-icon">
                                                <i className="fa fa-upload" aria-hidden="true"></i>
                                            </span>
                                            <span className="file-label">
                                                upload
                                            </span>

                                            <i className="fa fa-chevron-circle-down pl-4 " aria-hidden="true"></i>
                                        </span>
                                    </label>
                                </div>
                            </div>

                            <div className="dropdown is-hoverable ml-4">
                                <div className="dropdown-trigger pt-2">
                                    <button className="buttonx  " aria-haspopup="true" aria-controls="dropdown-menu4">
                                        <span><i className="fa fa-plus" aria-hidden="true"></i> Create now </span>
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
                            <span><i className="fa-solid fa-ellipsis-vertical pl-6 pt-3 is-size-4 "></i></span>

                            <div className="column is-flex is-justify-content-end">
                                <div className="dropdown is-hoverable ">
                                    <div className="dropdown-trigger">
                                        <button className="button-sort p-2 " aria-haspopup="true" aria-controls="dropdown-menu4">
                                            <i className="fa fa-angle-double-down pr-2" aria-hidden="true"></i>
                                            Sart :Last Moditiod
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

                        </div>
                    </div>
                    <div className="columns ">
                        <div className="column is-12 is-size-5 p-3 box">
                            Recommend

                            <div className="columns is-multiline ">

                                {items.map((item) =>
                                    <div className="column is-4  ">
                                        <div className="card ">
                                            <div className="card-content">
                                                <p className="title">
                                                    <img src={MAIN_PIC} alt="" height="250" width="300" />
                                                </p>
                                            </div>
                                            <footer className="card-footer p-3">
                                                <i className="fa fa-address-card p-1 is-size-5" aria-hidden="true"></i>
                                                {item.title}
                                            </footer>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                    <div className="columns ">
                        <div className="column box is-12 is-size-5">
                            Folders
                            <div className="AllFile-Files-Document ">
                                {Folder_items.map((item) =>
                                    <div className="column is-4">
                                        <div className="card p-4  is-flex is-justify-content-space-between">
                                            <i className="fa fa-file-code-o  " aria-hidden="true"></i>
                                            {item.textFoder}
                                            <i className="fa fa-ellipsis-v  " aria-hidden="true"></i>
                                        </div>

                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="columns ">
                        <div className="column is-12 is-size-5 p-4 box">
                            Files

                            <div className="columns is-multiline ">


                                {items.map((item) =>
                                    <div className="column is-4 ">
                                        <div className="card ">

                                            <div className="card-content">
                                                <p className="title">
                                                    <img src={MAIN_PIC} alt="" height="250" width="300" />
                                                </p>
                                            </div>
                                            <footer className="card-footer p-3">
                                                <i className="fa fa-address-card p-1 is-size-5" aria-hidden="true"></i>
                                                {item.title}
                                            </footer>
                                        </div>
                                    </div>
                                )}


                            </div>
                        </div>
                    </div>
                </div>
                <div className='column is-3'>
                    <StorageOverview />
                </div>
            </div>




        </div>

    )
}

export default AllFiles
