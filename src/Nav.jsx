import React from "react";
import './Nav.css'
const Nav=()=>{
    return(
        <div className="Nav">
            <div className="container">
                <img className="img_logo" src="https://www1.mcu.edu.tw/Apps/SB/data/10/%E6%A0%A1%E5%BE%BD.gif"/>
                <button className="NavBtn"><a className="NavA" href="/">首頁</a></button>
                <button className="NavBtn"><a className="NavA" href="/Management">控制面板</a></button>
                <button className="NavBtn"><a className="NavA" href="/fileupload">上傳書單找書</a></button>
                <button className="NavBtn"><a className="NavA" href="/qrcode">QRCode</a></button>
            </div>

        </div>
    )
}
export default Nav;