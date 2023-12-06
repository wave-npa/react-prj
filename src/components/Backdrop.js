function Backdrop(comp){
    return(
        <div className = 'backdrop' onClick={comp.onCancel}/>
    );
}

export default Backdrop;