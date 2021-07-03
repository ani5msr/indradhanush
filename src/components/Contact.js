import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import green from '@material-ui/core/colors/green';
import stylesimg from './imagesStyles.js';
import GridContainer from "./GridContainer.js";
import GridItem from "./GridItem.js";
import Paper from '@material-ui/core/Paper';
import Carousel from "./Carousel.js"
import SectionCarousel from "./SectionCarousel.js"
import "./style.css";
import { grayColor } from "./material-kit-react.js";
import { lightGreen, lightBlue } from "@material-ui/core/colors";
import styles from './imagesStyles.js';
import lime from '@material-ui/core/colors/lime';
import PrimaryNav from '../PrimaryNav.js';
import SimpCard from "./SimpCard.js"
import SimpCard2 from "./SimpCard2.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
const color = lime[100];
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


export default function Contact() {
    const classes = useStylesz();
    const classes3 = useStyles3();
    const classes2 = useStyles2();
     return (
        <div><PrimaryNav />
          
            <Paper elevation={9} style={{ backgroundColor: color }}>
        <div  className={classes.brand}>
                    <div className={classes.title}><h4 className="tab">Contact us for more</h4>
                         
                     </div><div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20 }}>
                         <div>
                             <SimpCard /></div><div>
                             <SimpCard2 /></div></div>
                 </div><div class="social-container">
                     <h2>Follow us on Social Media</h2>
                     <a href="https://www.youtube.com/c/jamesqquick"
                         className="youtube social" target="https://www.youtube.com/c/jamesqquick">
                         <FontAwesomeIcon icon={faYoutube} size="4x" />
                     </a>
                     <a href="https://www.facebook.com/INDRADHANUSHA-Youth-Social-Foundation-107588541545187"
                         className="facebook social" target="https://www.facebook.com/INDRADHANUSHA-Youth-Social-Foundation-107588541545187">
                         <FontAwesomeIcon icon={faFacebook} size="4x" />
                     </a>
                     <a href="https://twitter.com/DhanushaIndra" className="twitter social">
                         <FontAwesomeIcon icon={faTwitter} size="4x" target="https://twitter.com/DhanushaIndra" />
                     </a>
                 </div>
             </Paper>                          </div>)
}