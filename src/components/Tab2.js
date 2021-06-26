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
import { lightGreen, lightBlue } from "@material-ui/core/colors";
import styles from "./typographyStyle.js";

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
const colour = green[500];
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
export default function Tab2() {
    const classes = useStylesz();
    const classes3 = useStyles3();
    return (<div>
       
                <div className={classes.brand}>
                    <h1 className={classes.title}><div className="tab">Our Initiatives.</div></h1></div>

        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20 }}>
            <div><Paper style={{ backgroundColor: colour }} elevation={6}><div className={classes.typo}>

                <Paper style={{ backgroundColor: "lemonchiffon" }}>  <h1 className={classes.title}><div className="tab2">Project NutriShakti</div></h1> </Paper>
                <h2>Our New range of Millet-based products were introduced in the
                    villages </h2>
            </div></Paper></div>
           
            <div>
               <img className="img" src={act2} className="img" /> </div>   </div>
       
                 
           
           
        
        </div>)
}