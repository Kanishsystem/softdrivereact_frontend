import React from 'react'
import './AllFile.css';
import StorageOverview from './StorageOverview';
import AllFilesSortLastModified from './AllFilesSortLastModified';
import AllFilesRecommend from './AllFilesRecommend';
import AllFilesFilesImage from './AllFilesFilesImage';
import AllFilesFolders from './AllFilesFolders';
import AllFilesUploads from './AllFilesUploads';
import AllFilesCreateNow from './AllFilesCreateNow';
import FolderDetails from './FolderDetails';
import AllFilesStatus from './AllFilesStatus';
import UploadePageFullsreen from './UploadePageFullsreen';
import ShareFolderNotification from './ShareFolderNotification';

const AllFiles = () => {
    return (
        <div className='AllFiles-Frampage'>
            <div className='columns'>
                <div className="column is-9 ">
                    <div className="columns ">
                        <div className="column is-12 has-background-light is-flex ">
                            <div className="navbar-item has-dropdown is-hoverable">
                                <a href='##' className="navbar-link is-size-4">
                                    My Drive
                                </a>
                                <div className="navbar-dropdown">
                                    <a href='##' className="navbar-item">
                                        About
                                    </a>
                                    <a href='##' className="navbar-item">
                                        Jobs
                                    </a>
                                    <a href='##' className="navbar-item">
                                        Contact
                                    </a>
                                </div>
                            </div>
                            <div className='column is-flex is-justify-content-end'>
                                <div className='listicon p-2 '>
                                    <i className="fa fa-bars is-size-4" aria-hidden="true"></i>
                                </div>
                                <div className='alerticon p-2'>
                                    <i className="fa fa-exclamation-circle is-size-4" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="columns  ">
                        <div className="column is-12 box is-flex">
                            <AllFilesUploads />

                            <AllFilesCreateNow />

                            <span><i className="fa-solid fa-ellipsis-vertical pl-6 pt-3 is-size-4 "></i></span>
                            <div className="column is-flex is-justify-content-end">
                                <AllFilesSortLastModified />
                            </div>
                        </div>
                    </div>
                    <div className="columns ">
                        <AllFilesRecommend />
                    </div>
                    <div className="columns ">
                        <AllFilesFolders />
                    </div>
                    <div className="columns ">
                        <AllFilesFilesImage />

                    </div>
                    <div className='columns'>
                        <UploadePageFullsreen />
                    </div>
                    <div className='columns '>
                        <AllFilesStatus />
                    </div>
                    <div className='columns'>
                        <ShareFolderNotification />
                    </div>
                </div>
                <div className='column is-3'>
                    <StorageOverview />

                    <FolderDetails />
                </div>

            </div>
        </div>
    )
}
export default AllFiles
