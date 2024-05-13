import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [selected, setSelected] = useState("")
	const handleSelected = (color) => setSelected(color)
	const [show,setShow] = useState(false)
	return (
		<div className="text-center">
			<div className="box">
				<div className={`${selected === 'red-circle'? "red-selected" : "red-circle"} red-circle`} onClick={()=> handleSelected("red-circle")}></div>
				<div className={`${selected === 'orange-circle'? "orange-selected" : "orange-circle"} orange-circle`} onClick={()=> handleSelected("orange-circle")}></div>
				<div className={`${selected === 'green-circle'? "green-selected" : "green-circle"} green-circle`} onClick={()=> handleSelected("green-circle")}></div>
				<div className={show?`${selected === 'purple-circle'? "purple-selected" : "purple-circle"} purple-circle`:null} onClick={()=> handleSelected("purple-circle")}></div>
			</div>
			
			<button className="btn btn-primary" onClick={()=>setShow(!show)} >Show</button>
    		
			
		</div>
	);
};

export default Home;
