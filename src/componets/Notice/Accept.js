import React from "react";
import NotificationService from "../Service/NotificationService";

const Accept=(props)=>{
    const handleAccept=(props)=>{
        NotificationService.accept(props.position,props.id).then((response)=>{
            if(response.status === 200){
                props.onSendMessage(response.data)
            }
        }).catch((error)=>{
            console.log(error)
            props.onSendMessage("Unsuccessful")
        })
    
    
    }

    

    return(<button className="btn btn-success" onClick={()=>handleAccept(props)}>Approve</button>)
}

export default Accept;