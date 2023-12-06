import { useState } from 'react'

import Modal from './Modal';
import Backdrop from './Backdrop';

function Message(info){
  const [showModal, setModal] = useState(false);

  function likeHandler(){
    setModal(true);
  }

  function closeModal(){
    setModal(false);
  }

  function disbaleButton(){
    closeModal();
    document.getElementById(info.title).disabled = true;
    document.getElementById(info.title).innerHTML = "Liked";
  }

  return(
    <div className = "card">
      <h2>{info.title}</h2>
      <h5>{info.name}</h5>
      <p>
        {info.text}
      </p>
      <div className = "actions">
        <button className='btn' id={info.title} onClick={likeHandler}>Like</button>
      </div>
      {showModal && <Modal onCancel = {closeModal} onConfirm = {disbaleButton}/>}
      {showModal && <Backdrop onCancel = {closeModal}/>}
    </div>
  );
}

export default Message;