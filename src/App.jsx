// Importing modules
import React, { useState, useEffect } from "react";
import "./App.css";
import TemiControlBtn from "./TemiControlBtn";
function App() {
	const stall={'1':{'dep':'電腦與通訊工程學系','name':'基於電腦視覺之自動收鞋機器人','p':'這個專題專注於開發一款自動收鞋機器人，機器人將利用先進的電腦視覺技術辨識和收集散落的鞋子。利用深度學習和影像辨識演算法，這個機器人將能夠精準地辨識不同種類和尺寸的鞋子，並在指定的區域將它們收集整理。這項技術的應用可擴展至零售業、家庭或公共場所，為整個社會帶來更高效的鞋類管理和組織。'},
				'2':{'dep':'電子工程學系','name':'具機械手臂及灑水功能之飛行探測器','p':'這個研究專案致力於開發一種創新的飛行探測器，它結合了機械手臂和灑水功能，可在空中執行多種任務。該飛行探測器具有自主飛行能力，並搭載精密的機械手臂，可在空中執行精確的操作，例如植物灑水、環境監測等。這項技術的潛在應用包括農業領域的智能化灌溉、環境監測和災害救援等領域。'},
				'3':{'dep':'資訊管理學系','name':'救護 e 聯盟','p':'救護 e 聯盟旨在建立一個整合了人工智慧和即時通訊技術的救護系統。這個系統將能夠即時識別急救場景並啟動相應的救護程序，包括派遣救護車、通知附近醫療機構等。透過智能化的診斷工具和救護指南，它可以提供實時的醫療建議和指導，提高急救的效率和準確性。這項專案有潛力對急救系統帶來革命性的改變，提升對急診場景的即時反應和醫療支援水平。'}}
	return(
		<div>
			<div>
				<h1>周遭的攤位</h1>
			</div>
			<div>
				{
					Object.values(stall).map((e)=>{
						return(
							<div className="tab_h">
								<div className="tab_upper">
									<h2 className="tab_title">{e.name}</h2>
									<p className="tab_dep">{e.dep}</p>
								</div>
								<div className="tab_lower">
									<p className="para">{e.p}</p>
									<button className={`NavBtn tab_btn`} type="button">Go</button>
								</div>
							</div>
						)
					})
				}
			</div>
		</div>
	)
}
 
export default App;