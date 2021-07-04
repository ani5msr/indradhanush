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
        
    },
    para2: {
        fontSize: "2.2rem",
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
        <Paper style={{ backgroundColor: color3 }} elevation={5}><h1 className="whywedo" >* Integrating Foods with WCD programs, CSR projects etc. </h1></Paper>
        <Paper style={{ backgroundColor: color3 }} elevation={5}><h1 className="whywedo">* Nutritious Foods to children and Pregnant and Lactating women. </h1></Paper>
        <Paper style={{ backgroundColor: color3 }} elevation={5}><h1 className="whywedo">* Awareness creation through Anganwadi,UN Volunteers, NYKS, NSS, individuals. </h1></Paper>
        <Paper style={{ backgroundColor: color3 }} elevation={5}><h1 className="whywedo">* Periodic Monitoring and Evaluation for Learning and Replication </h1></Paper>
        <Paper style={{ backgroundColor: color3 }} elevation={5}><h1  className="whywedo">* Capacity building for Farmers, FPO's and SHG's </h1></Paper>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20 }}>
            <div>
        <Paper style={{ backgroundColor: color2 }} elevation={5}><h1 style={{ fontSize: "2.5rem" }} class="wedokey"> Key Partners -></h1> </Paper>
            </div>
            <div>
                <Paper style={{ backgroundColor: color2 }} elevation={5}><li style={{ fontSize: "1.5rem" }} class="wedopara"> Farmers and FPO's</li>
                    <li style={{ fontSize: "1.5rem" }} class="wedopara"> Self-Help Groups/Women Groups</li>
                    <li style={{ fontSize: "1.5rem" }} class="wedopara"> Anganwadi Systems</li>
                    <li style={{ fontSize: "1.5rem" }} class="wedopara"> Coalition for Food and Nutrition Security</li>
                    <li style={{ fontSize: "1.5rem" }} class="wedopara"> Indian Institute of Millet Research, Hyderabad</li>
                    <li style={{ fontSize: "1.5rem" }} class="wedopara"> DHAN Foundation</li>
                    <li style={{ fontSize: "1.5rem" }} class="wedopara"> Dr. Raj Bhandari, Member , Niti Aayog</li>
                    <li style={{ fontSize: "1.5rem" }} class="wedopara"> Dr. Preeti Deshmukh, Dietician, Founder- FOOD NEST, Social Entreaprenur</li>
                    <li style={{ fontSize: "1.5rem" }} class="wedopara"> Dr. Satish, PhD- Nutrition Security , IIT Bombay</li></Paper>
            </div></div>
       < div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20 }}>
            <div><Paper style={{ backgroundColor: color2 }} elevation={5}><h1 style={{ fontSize: "2.5rem" }} class="wedokey"> Business Resources</h1> </Paper>
                <Paper style={{ backgroundColor: color2 }} elevation={5}><h2 style={{ fontSize: "1.5rem" }} class="wedopara"> Project Funding- UNDP, NABARD</h2>
                    <h2 style={{ fontSize: "1.5rem" }} class="wedopara">UN Volunteers, NYKS, NSS</h2>
                    <h2 style={{ fontSize: "1.5rem" }} class="wedopara">Corporate Employees</h2></Paper></div> </div>
    </div>)
}