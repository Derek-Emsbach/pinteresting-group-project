import React from "react";
import { useHistory } from "react-router-dom";

function BoardDetailPage(){
    const history = useHistory()
    const CreateBoardForm = async(e)=>{
        history.push('/boardform')
    }
    return(
        <>
        <h1>Board details here</h1>

        <button onClick={CreateBoardForm}>Create Boards</button>
        </>
    )
}

export default BoardDetailPage