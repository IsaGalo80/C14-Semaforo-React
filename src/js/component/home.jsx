import React, { useState } from "react";
import  ReactDOM  from "react-dom";
import "../../styles/index.css"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, brillo]=useState(null);
	return (
		<div className="container-fluid">
			<div className="palito">
				<div className={ color==="red"? "red luzenc": "red"}   onClick = {()=>brillo("red")}></div>
				<div className={ color==="yellow"? "yellow luzenc": "yellow"}onClick = {()=>brillo("yellow")}></div>
				<div className={ color==="green"? "green luzenc": "green"}onClick = {()=>brillo("green")}></div>
			</div>
		</div>
	)
		}


export default Home;
ReactDOM.render(<Home />, document.querySelector('#app'));