import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import styles from "./parallaxStyle.js";
import Parallax from "./Parallax.js";
import { request } from "http";


export default function Tab2() {
	return (
		<Parallax image={require("../Data/images/act2.jpg")}>
			<p> fsfsdfsjf </p></Parallax>)
}