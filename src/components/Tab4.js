import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import green from '@material-ui/core/colors/green';

import GridContainer from "./GridContainer.js";
import GridItem from "./GridItem.js";
import Paper from '@material-ui/core/Paper';
import Carousel from "./Carousel.js"
import SectionCarousel from "./SectionCarousel.js"
import "./style.css";
import workwe from "../Data/images/workwe.jpg";
import stylesimg from './imagesStyles.js';
import { grayColor } from "./material-kit-react.js";


import act2 from "../Data/images/act2.jpg";
import work4 from "../Data/images/work4.jpg";
import work6 from "../Data/images/work6.jpg";
import work7 from "../Data/images/work7.jpg";
import work3re from "../Data/images/work3re.jpg";
import { lightGreen, lightBlue, purple } from "@material-ui/core/colors";
import styles from './imagesStyles.js';
import Typography from '@material-ui/core/Typography';
const color2 = lightGreen[100];
const color3 = green[900];
const useStyles3 = makeStyles(styles);
const useStyles = makeStyles({
    root: {
        minWidth: 300

    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.1)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },

});
const colour = green[300];
const componentsStyle = {
    brand: {
        color: grayColor,
        textAlign: "left",

    },
    brand2: {
        color: green,
        textAlign: "center",

    },
    title: {

        fontSize: "3.2rem",
        fontWeight: "600",
        display: "inline-block",
        position: "relative",
    },
    title2: {

        fontSize: "2.6rem",
        fontWeight: "600",
        display: "inline-block",
        position: "relative",
    },
    parabrand: {
        color: color3,
        textAlign: "left"
    },
    para: {
        fontSize: "2.0rem",
        fontWeight: "800",
        display: "inline-block",
        position: "relative",
        
    }
}
const headStyle = {
    textDecoration: 'none',
    display: "flex",
    fontSize: 54,
    fontWeight: "bold",
    letterSpacing: 1,
    color: "#99cff"

}
const useStylesz = makeStyles(componentsStyle);
const useStyles2 = makeStyles(styles);
export default function Tab2() {
    const classes = useStylesz();
    const classes3 = useStyles3();
    const classes2 = useStyles2();
    return (<div>
        <div className={classes.brand}>
            <h1 className={classes.title}><div className="tab">What we Do.</div></h1></div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20 }}>
            <div>
                <img className={
                    classes2.imgRaised +
                    " " +
                    classes2.imgRounded +
                    " " +
                    classes2.imgFluid
                } src={workwe} /></div><div>
        <Paper style={{ backgroundColor: color2 }}>
                <span className="wedo"> India is facing the triple burden of malnutrition </span>
        </Paper>
                <Paper style={{ backgroundColor: color2 }}>
                    <li className="wedopara"> Wasting</li>
                    <li className="wedopara"> Stunting </li>
                    <li className="wedopara"> Underweight and Nutrition deficiencies</li>
                </Paper></div>
        </div>
        <div className={classes.brand2}>
            <h1 className={classes.title2}><div className="tab">Our Solution to Rural Malnutrition.</div></h1></div>
        <div className={classes.parabrand}>
            <h2 className={classes.para}><div className="tab">Blending the food , nutrition and awareness, with
                an integrated value chain model of farm-thali</div></h2></div>

    </div>)
}