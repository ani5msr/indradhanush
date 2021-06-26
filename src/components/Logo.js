import React from "react"; 
const image = require("../Data/images/logoindra21.jpg")


const Logo = () => {

	const logoContainerStyle ={
		padding: 10, 
		
		// height: 50
	}

	const imageStyle ={
		// border: "2px solid black", 
		height: 100, 
		width: 140
	}

	return (
		<div className="logo" style={logoContainerStyle}>
			<img style={imageStyle} src={image} alt="IndraDhanusha"/>
		</div>
		
		)
}

export default Logo; 
