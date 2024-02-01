import React from 'react';

const SmartModal = ({ closeModal, modalOptions }) => {
    const title = modalOptions && modalOptions.title ? modalOptions.title : null; 
    const footer =  modalOptions && modalOptions.footer ? modalOptions.footer : null;
    const body = modalOptions && modalOptions.body ? modalOptions.body: null;
    const bodyclose = modalOptions && modalOptions?.bodyClose===false ? false : true;
    const modalClass = modalOptions && modalOptions?.modalClass ? modalOptions?.modalClass: "";
    const {
        okText = "Yes",
        cancelText="No",
        okFunction,
        cancelFunction
    } = modalOptions;
    //
    console.log("modal class " , okFunction)
    const closeModalOnBody=()=>{       
        if(bodyclose===true){
            closeModal();
        }
    }

    const okCancelFooter = () => {
        return (
          <>
            <button className="button is-success is-small" onClick={okFunction}>{okText}</button>
            <button className="button is-danger is-small" onClick={cancelFunction}>{cancelText}</button>       
          </>
        );
      };

    return (
        <div key={"text-1"} className={"modal is-active smart-modal " + modalClass}> 
            <div className="modal-background" onClick={closeModalOnBody} />
            <div className="modal-card">
                {title && <header className="modal-card-head">
                    <p className="modal-card-title">{title}</p>
                    <button onClick={closeModal} className="delete" aria-label="close" />
                </header>}
                <section className="modal-card-body">{body}</section>
               {footer &&  <footer className="modal-card-foot">
                     {footer}
                </footer>
               }
                {okFunction &&  <footer className="modal-card-foot is-justify-content-flex-end">
                     {okCancelFooter()}
                </footer>
               }
            </div>
        </div>


    );
};

export default SmartModal;

/*
 <div className="modal is-active">
      <div className="modal-background" onClick={closeModal}></div>
      <div className="modal-content">
        {modalContent}
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={closeModal}
      ></button>
    </div>    
    */