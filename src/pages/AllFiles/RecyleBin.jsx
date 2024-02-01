import React from 'react'
import "./Recyclebin.css"
import { PDF_PIC } from '../../services/ImageService'

const RecyleBin = () => {
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

            <div className='PDFcreation card p-5 '>
              <img src={PDF_PIC} alt="" />
              <span>{item.Titlename}</span>
              <span><i className="fa fa-ellipsis-h pl-2" aria-hidden="true"></i></span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default RecyleBin