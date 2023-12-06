function Modal(comp){
    function cancelHandler(){
        comp.onCancel();
    }

    function confirmHandler(){
        comp.onConfirm();
    }

    return(
        <div className = 'modal'>
            <p>Do you want to like post</p>
            <button className = 'btn btn--alt' onClick={cancelHandler}>Cancel</button>
            <button className = 'btn' onClick={confirmHandler}>Confirm</button>
        </div>
    );
}

export default Modal;