import React from 'react'
import { SmartSoftInput } from 'soft_digi';
const CreatFolder = () => {
    return (
        <div className='CreatFolder'>
            <div className='columns'>
                <div className='column is-7'>
                    <div className="card ">
                        <header className="card-header ">

                            <p className="card-header-title">
                                <i className="fa fa-folder  has-text-warning p-2 mr-4 is-size-4" aria-hidden="true"></i>
                                Create Folder
                            </p>
                            <button className="delete m-5"></button>
                        </header>
                        <div className="card-content">
                            <span>Folder name</span>
                            <SmartSoftInput label="" placeHolder='Untitled' className="box-model" id="boxmodel" />
                            <div className='is-flex is-justify-content-end mt-6'>
                                <button class="button is-link is-light m-2">Cancel</button>
                                <button class="button is-link m-2">Create</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatFolder
