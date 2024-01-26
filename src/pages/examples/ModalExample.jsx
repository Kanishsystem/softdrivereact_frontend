import React, { useEffect, useState } from "react";
import { useSiteContext } from '../../contexts/SiteProvider';

const ModalExample = () => {  
    const { setLoading, setUser, openModal, closeModal, startSessionAct } = useSiteContext();

    
      const MyFooterContent = () => {
        return (
          <div>
            <button className="button is-success is-small">Save changes</button>
            <button className="button is-small" onClick={closeModal}>Cancel</button>
          </div>
        );
      };
    
      const MyModalContent = () => {
        return (
          <div>
            <p> This is everything ever </p>
          </div>
        );
      };
    
      const openMyModal = () => {
        let modalObject = { title: 'login password', body: <MyModalContent />, footer: <MyFooterContent /> };
        openModal(modalObject);
      };

    return (
       <>
        <button onClick={openMyModal}> open modal </button>
       </>
    )
}

export default ModalExample