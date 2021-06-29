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

import { lightGreen, lightBlue } from "@material-ui/core/colors";
import styles from './imagesStyles.js';

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
                    <h1 className={classes.title}><div className="tab">Our Initiatives.</div></h1></div>

        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20 }}>
            <div><Paper style={{ backgroundColor: colour }} elevation={6}><div className={classes.typo}>

                <Paper style={{ backgroundColor: "lemonchiffon" }}>  <h1 className={classes.title}><div className="tab2">Project NutriShakti</div></h1> </Paper>
                <h2>Our Foundation was involved in promoting the use of millets as a source of nutrition and empowerment in
                in the Kaldari Village of Tal-Purandar district in Pune. The main purpose was to make
                the farmers aware of the millets as an alternate sustainable crop which requires less water, minimum land
                    and has high resilience to climate change</h2>
            </div></Paper></div>
           
            <div>
                <img className="img" src={act2} className="img" /> </div>   </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20 }}>
            <div><img className={
                classes2.imgRaised +
                " " +
                classes2.imgRounded +
                " " +
                classes2.imgFluid
            } src={work4} /> </div>
            <div><Paper elevation={6} style={{ backgroundColor: "lemonchiffon" }}><h1 className="workhead"> Goals accomplished in the meet</h1></Paper>
            <h2 className="work"> * Spreading awareness of millets being a resource to eradicate malnutrition among anganwadi children</h2>
       <h2 className="work"> * Enabling a high production of millets to fulfill the need for nutritious food</h2>
      <h2 className="work"> * Empowerment of women and farmers through training,procurement and market providing</h2>
      <h2 className="work"> * Promoting millets as a source of sustainable agriculture and means of environment preservation</h2></div>
           </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20 }}>
            <div><Paper elevation={6} style={{ backgroundColor: "lemonchiffon" }}><h1 className="workhead2"> Solutions provided by us</h1></Paper>
                <h2 className="work2"> *  High production to be acheived through improved variety of FINGER MILLETS with best suitable practices and cultivation methods</h2>
                <h2 className="work2"> * For malnutrition and health, our Project NUTRISHAKTI is essentially centered around providing the millet
                    based nutritious food to anganwadi children from 3 to 7 and also to lactating and pregnant women.</h2>
                <h2 className="work2"> * We are providing training to local SHGs about millet processing,handling,storage and
                    product making so they can enter waste millet market</h2>
                <h2 className="work2"> * Also we are providing training to ASHA Anganwadi workers about how to
                    cook millet based ready to eat food like Upma, Dosa, Khicdi which is 3 times more nutritious than regular meal</h2>
            </div>
            <div><img className={
                classes2.imgRaised +
                " " +
                classes2.imgRounded +
                " " +
                classes2.imgFluid
            } src={work6} />
                <img className={
                    classes2.imgRaised +
                    " " +
                    classes2.imgRounded +
                    " " +
                    classes2.imgFluid
                } src={work7} />
            </div></div>

                 
           
           
        
        </div>)
}
