
import React, { useState } from 'react';
import { MAIN_PIC } from '../../services/ImageService';
import { SmartSoftCheckRadioSwitch } from 'soft_digi';

const AllFilesFilesImage = () => {
    const [formData, setFormData] = useState({});
    // const [formSubmit, setFormSubmit] = useState(false);
    // const [formErrors, setFormErrors] = useState(false);
    // const [type, setType] = useState("password");

    const handleInputChange = (name, value) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const options = [
        { value: '4', label: '' },
    ]
    const File_items = [
        { img: { MAIN_PIC }, title: "Media report-Nov 2023", id: 1 },
        { img: { MAIN_PIC }, title: "Media report-Nov 2023", id: 2 },
        { img: { MAIN_PIC }, title: "Media report-Nov 2023", id: 3 },
    ]

    return (
        <div className='AllFiles_Files_image'>
            <div className="column is-12 is-size-6 p-3 box">
                Files

                <div className="columns is-multiline ">


                    {File_items.map((item) =>
                        <div key={item.id} className="column is-4 ">
                            <div className="card ">
                                <label className="AlllFiles_File_checkbox ">
                                    {/* <SmartSoftCheckRadioSwitch
                                        options={options}
                                    /> */}
                                    <SmartSoftCheckRadioSwitch
                                        // key={item.id}
                                        options={options}
                                        value={formData?.name1 || null}
                                        onChange={(value) => handleInputChange("name1", value)}

                                    />
                                </label>
                                <div className="card-content">
                                    <p className="title">
                                        <img src={MAIN_PIC} alt="" height="250" width="300" />
                                    </p>
                                </div>
                                <footer className="card-footer p-3 ">
                                    <div className='has-text-warning pr-1'>  <i className="fa fa-folder p-1 is-size-5" aria-hidden="true"></i></div>
                                    <div className='is-size-6 ' >{item.title} </div>
                                </footer>
                            </div>
                        </div>
                    )}


                </div>
            </div>
        </div>
    )
}

export default AllFilesFilesImage
