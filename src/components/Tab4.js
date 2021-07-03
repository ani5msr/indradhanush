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

import stylesimg from './imagesStyles.js';
import { grayColor } from "./material-kit-react.js";
import act2 from "../Data/images/act2.jpg";
import work4 from "../Data/images/work4.jpg";
import work6 from "../Data/images/work6.jpg";
import work7 from "../Data/images/work7.jpg";
import work3re from "../Data/images/work3re.jpg";
import { lightGreen, lightBlue } from "@material-ui/core/colors";
import styles from './imagesStyles.js';
import Typography from '@material-ui/core/Typography';
const color2 = lightGreen[100];

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
    title: {

        fontSize: "3.2rem",
        fontWeight: "600",
        display: "inline-block",
        position: "relative",
    },
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
        <Paper style={{ backgroundColor: color2 }}>
            <Typography align="left" component="h4" variant="h4" gutterBottom>
                <span className="wedo"> India is facing the triple burden of malnutrition </span></Typography>
        </Paper>
        <Paper style={{ backgroundColor: color2 }}>
            <span className="milletpara"> Wasting , stunting, underweight and micronutrion deficiencies </span>
        </Paper>
    </div>)
}