import React from 'react'
import './AllFile.css';
import StorageOverview from './StorageOverview';
import AllFilesSort_Last_Moditiod from './AllFilesSort_Last_Moditiod';
import AlllFiles_Recommend from './AlllFiles_Recommend';
import AllFiles_Files_image from './AllFiles_Files_image';
import AllFiles_Folders from './AllFiles_Folders';
import AllFiles_Uplodes from './AllFiles_Uplodes';
import AllFiles_Create_now from './AllFiles_Create_now';
import Folder_Details from './Folder_Details';
import AllFiles_Status from './AllFiles_Status';


const AllFiles = () => {
    return (
        <div className='AllFiles-Frampage'>
            <div className='columns'>
                <div className="column is-8 ">
                    <div className="columns ">
                        <div className="column is-12 has-background-light is-flex ">
                            <div class="navbar-item has-dropdown is-hoverable">
                                <a class="navbar-link is-size-4">
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
                                    <i class="fa fa-bars is-size-4" aria-hidden="true"></i>
                                </div>
                                <div className='alerticon p-2'>
                                    <i class="fa fa-exclamation-circle is-size-4" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="columns  ">
                        <div className="column is-12 box is-flex">
                            <AllFiles_Uplodes />

                            <AllFiles_Create_now />

                            <span><i className="fa-solid fa-ellipsis-vertical pl-6 pt-3 is-size-4 "></i></span>
                            <div className="column is-flex is-justify-content-end">
                                <AllFilesSort_Last_Moditiod />
                            </div>
                        </div>
                    </div>
                    <div className="columns ">
                        <AlllFiles_Recommend />
                    </div>
                    <div className="columns ">
                        <AllFiles_Folders />
                    </div>
                    <div className="columns ">
                        <AllFiles_Files_image />

                    </div>
                </div>
                <div className='column is-3'>
                    <StorageOverview />

                    <Folder_Details />
                    <AllFiles_Status />
                </div>
            </div>
        </div>
    )
}
export default AllFiles
