import React from 'react'
import { MAIN_PIC } from '../../services/ImageService';

const AlllFiles_Recommend = () => {

    const Recommend_items = [
        { img: { MAIN_PIC }, title: "Media report-Nov 2023" },
        { img: { MAIN_PIC }, title: "Media report-Nov 2023" },
        { img: { MAIN_PIC }, title: "Media report-Nov 2023" },
    ]
    return (
        <div className='AlllFiles_Recommend'>
            <div className="column is-12  is-size-5 p-3 box">
                Recommend

                <div className="columns  is-multiline ">

                    {Recommend_items.map((item) =>
                        <div className="column is-4  ">
                            <div className="card ">
                                <label className="AlllFiles_Recommend_checkbox ">
                                    <input type="checkbox" />

                                </label>
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
    )
}

export default AlllFiles_Recommend
