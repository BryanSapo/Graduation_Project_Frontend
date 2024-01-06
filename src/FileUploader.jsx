import React from "react";
import { useState } from "react";
export default function FileUploader(){
    const [file,setFile]=useState()
    const submitFile=()=>{
        const data = new FormData();
        data.append("file",file)
        const requestOptions = {
            method: 'POST',
            // headers: { 'Content-Type': "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" },
            body: data
        };
        fetch('/uploadFile', requestOptions)
            .then(response => response.json())
            .then(data => alert("上傳"+data['msg']));
        console.log(file)
    }
    return(
        <div className="TemiControlBtn">
            <input type="file" onChange={(e)=>setFile(e.target.files[0])}/>
            <button onClick={submitFile}>送出</button>
        </div>
    )
}