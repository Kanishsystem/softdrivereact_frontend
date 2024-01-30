import React from 'react'
import { MAIN_PIC } from '../../services/ImageService';
import { USER_PIC } from '../../services/ImageService';

const Folder_Details = () => {
    const folderData = [
        { File_date: "file type", file_name: "image" },
        { File_date: "Size", file_name: "64KB" },
        { File_date: "Last Modified", file_name: "---" },
        { File_date: "Date Created", file_name: "Jun 23,2023" },
        { File_date: "Permission", file_name: "Private" },
    ]
    return (
        <div className='Folder_Details'>
            <div className='columns'>
                <div className='column ml-1 card is-flex is-justify-content-space-between'>
                    <span> <i class="fa fa-sign-out p-4" aria-hidden="true"></i>
                        <i className="fa fa-arrows-v p-4" aria-hidden="true"></i>
                    </span>
                    <span>
                        <i className="fa fa-star-o p-4" aria-hidden="true"></i>
                        <i className="fa fa-users p-4" aria-hidden="true"></i>
                        <i className="fa fa-ellipsis-v p-4" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
            <div className='column card'>
                <p><i class="fa fa-exclamation-circle p-3" aria-hidden="true"></i>
                    Key Visuals</p>

                <img src={MAIN_PIC} alt="" height="250" width="300" />
                <p>Shared to</p>
                <img className='User_pic' src={USER_PIC} alt="" />
                <img className='User_pic_two' src={USER_PIC} alt="" />
                <img className='User_pic_three' src={USER_PIC} alt="" />
                <img className='User_pic_four' src={USER_PIC} alt="" />
                <p className='Ower pt-4 pb-4'>Owned by</p>
                <img className='User_pic' src={USER_PIC} alt="" height="50" width="50" />
                <p className='YOU'> You</p>
            </div>
            <div className='column card'>
                <div className="tabs  ">
                    <ul>
                        <li className="is-active"><a>Details</a></li>
                        <li><a>Activities</a></li>
                    </ul>
                </div>
            </div>
            <div className='columns is-multiline'>
                {folderData.map((item) =>
                    <div className='column is-12 card is-flex ml-3 is-justify-content-space-between'>
                        <span>{item.File_date} </span>
                        <span>{item.file_name}</span>
                    </div>
                )}
            </div>


        </div>
    )
}
export default Folder_Details
