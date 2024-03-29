import React, { useState } from 'react'
import { MAIN_PIC } from '../../services/ImageService';
import { SmartSoftCheckRadioSwitch } from 'soft_digi';
const AllFilesRecommend = () => {

    const [formData, setFormData] = useState({});
    // const [formSubmit, setFormSubmit] = useState(false);
    // const [formErrors, setFormErrors] = useState(false);
    // const [type, setType] = useState("password");

    const handleInputChange = (name, value) => {
        console.log("name ", name, " value ", value);
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const options = [
        { value: '2', label: '' },
    ]
    const Recommend_items = [
        { img: { MAIN_PIC }, title: "Media report-Nov 2023", id: 1 },
        { img: { MAIN_PIC }, title: "Media report-Nov 2023", id: 2 },
        { img: { MAIN_PIC }, title: "Media report-Nov 2023", id: 3 },
    ]
    return (
        <div className='AlllFiles_Recommend'>
            <div className="column is-12  is-size-6 p-3 box">
                Recommend

                <div className="columns  is-multiline ">

                    {Recommend_items.map((item) =>
                        <div key={item.id} className="column is-4 ">
                            <div className="card ">
                                <label className="AlllFiles_Recommend_checkbox ">
                                    <SmartSoftCheckRadioSwitch
                                        // key={item.id}
                                        options={[{ value: item.id, label: "" }]}
                                        value={formData["input_eight_" + item.id] || null}
                                        onChange={(value) => handleInputChange("input_eight_" + item.id, value)}

                                    />

                                </label>
                                <div className="card-content">
                                    <p className="title">
                                        <img src={MAIN_PIC} alt="" height="250" width="300" />
                                    </p>
                                </div>
                                <footer className="card-footer p-3 is-flex  ">

                                    <div className='has-text-warning pr-1'>  <i className="fa fa-folder p-1 is-size-5" aria-hidden="true"></i></div>
                                    <div className='is-size-6' >{item.title} </div>
                                </footer>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}

export default AllFilesRecommend
