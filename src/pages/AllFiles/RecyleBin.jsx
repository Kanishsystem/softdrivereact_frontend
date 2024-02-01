import React from 'react'
import "./Recyclebin.css"
import { PDF_PIC } from '../../services/ImageService'
import { SmartSoftCheckRadioSwitch } from 'soft_digi';
const RecyleBin = () => {
  const options = [
    { value: '1', label: '' },
  ]
  const PDFPDF = [
    { pdfs: { PDF_PIC }, Titlename: "Nextcloud M" },
    { pdfs: { PDF_PIC }, Titlename: "Nextcloud M" },
    { pdfs: { PDF_PIC }, Titlename: "Nextcloud M" },
    { pdfs: { PDF_PIC }, Titlename: "Nextcloud M" },
    { pdfs: { PDF_PIC }, Titlename: "Nextcloud M" },
    { pdfs: { PDF_PIC }, Titlename: "Nextcloud M" },
    { pdfs: { PDF_PIC }, Titlename: "Nextcloud M" },
    { pdfs: { PDF_PIC }, Titlename: "Nextcloud M" },
    { pdfs: { PDF_PIC }, Titlename: "Nextcloud M" },
    { pdfs: { PDF_PIC }, Titlename: "Nextcloud M" },
    { pdfs: { PDF_PIC }, Titlename: "Nextcloud M" },
    { pdfs: { PDF_PIC }, Titlename: "Nextcloud M" },
    { pdfs: { PDF_PIC }, Titlename: "Nextcloud M" },
    { pdfs: { PDF_PIC }, Titlename: "Nextcloud M" },
    { pdfs: { PDF_PIC }, Titlename: "Nextcloud M" },
  ]
  return (
    <div className='RecyleBin p-0 m-0'>
      <div className='trash_bin '>
        <i className="fa fa-trash" aria-hidden="true"></i>
      </div>
      <div className='columns is-multiline has-background-white'>
        {PDFPDF.map((item) =>
          <div className='column is-2'>

            <div className='PDFcreation card p-3 '>
              <SmartSoftCheckRadioSwitch
                options={options}
              />
              <img src={PDF_PIC} alt="" />
              <div className='is-flex is-justify-content-space-between'>
                <span >{item.Titlename}</span>
                <span><i className="fa fa-ellipsis-h pl-2" aria-hidden="true"></i></span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default RecyleBin