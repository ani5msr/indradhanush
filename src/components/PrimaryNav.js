import React from "react"; 
import Logo from "./Logo.js"; 
import NavLinks from "./NavLinks.js"; 
import SearchBar from "./SearchBar.js"; 
import "./style.css";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {Link} from 'react-router-dom'
import orange from '@material-ui/core/colors/orange';
import { makeStyles } from '@material-ui/core/styles';
import Volunteer from './Volunteer.js';
const PrimaryNav = () => {
	const useStyles = makeStyles({
		root: {
			background: 'linear-gradient(45deg, #FFDEAD 25%, #F0E68C 60%)',
			border: 0,
			borderRadius: 15,
			boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
			color: "black",
			height: 48,
			padding: '0 30px',
			fontWeight: "bold"
		},
	});
	const primaryNavStyle = {
		background: 'linear-gradient(45deg, #F5F5F5 25%,#B0E0E6 35% )',
		display: "flex", 
		justifyContent: 'space-evenly', 
		alignItems: "center", 
		padding: "35px 30px"
	}
	const colour = orange[100];
	const headStyle = {
		textDecoration: 'none',
		display: "flex",
		fontSize: 54,
		fontWeight: "bold",
		letterSpacing: 1,
		color: colour

    }
	const linkStyle ={
		textDecoration: "none", 
		fontSize: 18, 
		letterSpacing: 1, 
		color: "black", 
		fontWeight: "bold"
	}



	const linkItems= ["ABOUT US", "EVENTS", "FORMS", "WAYS TO GIVE", "CONTACT"]; 
	const classes = useStyles();
	return (
		
		<nav style={primaryNavStyle}>
			<Logo />
			<div className="heading"><a style={headStyle}> IndraDhanusha</a> </div> 
			<ButtonGroup variant="text" color="purple" aria-label="text primary button group">
		        <Button className={classes.root}>Volunteer </Button>
				<Button className={classes.root}>Careers</Button>
				<Button className={classes.root}>Contact us</Button>
			</ButtonGroup>

		</nav>
		)

}

export default PrimaryNav; 


