import React from 'react'

const AllFilesFolders = () => {
    const Folder_items = [
        { icon_one: <i className="fa fa-file-code-o  " aria-hidden="true"></i>, textFoder: " Work Documents", icon_two: <i className="fa fa-ellipsis-v  " aria-hidden="true"></i> },
        { icon_one: <i className="fa fa-file-code-o  " aria-hidden="true"></i>, textFoder: " Work Documents", icon_two: <i className="fa fa-ellipsis-v  " aria-hidden="true"></i> },
        { icon_one: <i className="fa fa-file-code-o  " aria-hidden="true"></i>, textFoder: " Work Documents", icon_two: <i className="fa fa-ellipsis-v  " aria-hidden="true"></i> },
        { icon_one: <i className="fa fa-file-code-o  " aria-hidden="true"></i>, textFoder: " Work Documents", icon_two: <i className="fa fa-ellipsis-v  " aria-hidden="true"></i> },
        { icon_one: <i className="fa fa-file-code-o  " aria-hidden="true"></i>, textFoder: " Work Documents", icon_two: <i className="fa fa-ellipsis-v  " aria-hidden="true"></i> },
        { icon_one: <i className="fa fa-file-code-o  " aria-hidden="true"></i>, textFoder: " Work Documents", icon_two: <i className="fa fa-ellipsis-v  " aria-hidden="true"></i> },

    ]
    return (
        <div className='AllFiles_Folders'>
            <div className="column box is-12 is-size-6">
                Folders
                <div className="AllFile-Files-Document ">
                    {Folder_items.map((item) =>
                        <div className="column is-4">
                            <div className="card p-4  is-flex is-justify-content-space-between">
                                <div className='has-text-danger'> <i className="fa fa-file-code-o  pt-1" aria-hidden="true"></i></div>
                                {item.textFoder}
                                <i className="fa fa-ellipsis-v pt-1 " aria-hidden="true"></i>
                            </div>

                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AllFilesFolders
