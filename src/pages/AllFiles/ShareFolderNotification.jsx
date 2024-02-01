import React from 'react'
import { USER_PIC } from '../../services/ImageService';
import { SmartSoftSelect } from 'soft_digi';

const ShareFolderNotification = () => {
    const profile = [
        { proName: "Joshua Davis (You)", promail: "Josh.davis@hotmail.com", proFinder: "Owner" },
        { proName: "Joshua Davis (You)", promail: "Josh.davis@hotmail.com", proFinder: "Owner" },
        { proName: "Joshua Davis (You)", promail: "Josh.davis@hotmail.com", proFinder: "Owner" },
    ]
    return (
        <div className='ShareFolderNotification '>
            <div className='column '>
                <div className="card">
                    <div className="card-content">
                        <p className="title">
                            <span><i className="fa fa-folder has-text-warning pr-3" aria-hidden="true"></i></span>
                            <span>Share "Brand Guideline"</span>
                            <span><i className="fa fa-cog ml-6 pl-6" aria-hidden="true"></i></span>
                            <span><i className="fa fa-exclamation-circle pl-3" aria-hidden="true"></i></span>
                        </p>
                        <p className='is-flex '>
                            <input className="input" type="text" placeholder="@Users or teams" />
                            <div className='Can_edit pl-3'>
                                <SmartSoftSelect
                                /></div>
                        </p>
                        <p className="subtitle mt-6">
                            People have access
                        </p>
                        {profile.map((item) =>
                            <div className='ShareFolderNotification_Access_profile '>
                                <div className='ShareFolderNotification_menmalimages'><img src={USER_PIC} alt="" /></div>
                                <div className='ShareFolderNotification_name'>{item.proName}</div>
                                <div className='ShareFolderNotification_mails'>{item.promail}</div>
                                <div className='ShareFolderNotification_faiders'>{item.proFinder}</div>
                            </div>
                        )}
                        <div className='General_access '>General access</div>
                        <div className='is-flex'>
                            <div className='securedicon is-size-3 p-4'><i className="fa fa-shield" aria-hidden="true"></i></div>
                            <div className='sellecternormal pt-5'>
                                <SmartSoftSelect /></div>
                        </div>
                        <div className='Accesscomment pl-6 '>Only People with access can open with the link</div>
                        <div className='is-flex is-justify-content-space-between p-2'>
                            <span>
                                <button className="button is-link is-light">Copy link</button>
                            </span>
                            <span>
                                <button className="button is-link is-light mr-3">Cancel</button>
                                <button className="button is-link ">Create</button>
                            </span>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ShareFolderNotification
