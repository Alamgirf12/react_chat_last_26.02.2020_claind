 import React from 'react'
 import './InfoBar.css';
 import closeIcon from '../../icons/closeIcon.png';
 import onlineIcon from '../../icons/onlineIcon.png';
 const InfoBar = ({room}) => (

 <div className="infoBar">
 	<div className="leftInnerContainer">
 		<img className={onlineIcon} src={onlineIcon} alt="Online image"></img>
 		 <h3>{room}</h3>
 	</div>
 	<div className="right InnerContainer">
 		<a href="/"><img src={closeIcon} alt="close icon" /></a>
 	</div>
 </div>

 )
 export default InfoBar;
