import React,{useState} from "react";
function Model(props){
    const onClose=props.onClose;
    const isVisible=props.isVisible;
    if(!isVisible) return null;
    const handleClose=(e)=>{
        if(e.target.id==="wrapper") onClose();
    };
    return (
        <div className={`fixed inset-0 flex justify-center items-center z-[10000]`} id="wrapper" onClick={handleClose}>
            helloadfgjajdsfh
        </div>
    )
}
export default Model;