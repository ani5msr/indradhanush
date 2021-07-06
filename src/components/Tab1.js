import React, { Component } from "react";
import "./style.css";
import mission1 from "../Data/images/mission1.jpg";
import aboutus2 from "../Data/images/aboutus2.jpg";
import aboutus from "../Data/images/aboutus.jpg";
import Fade from 'react-reveal/Fade';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Image from 'material-ui-image';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import  green from '@material-ui/core/colors/green';
import  amber from '@material-ui/core/colors/amber';

//import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import styles from './imagesStyles.js';
import GridContainer from "./GridContainer.js";
import GridItem from "./GridItem.js";

import { Animator, ScrollContainer, ScrollPage, batch,  FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
const headStyle = {
    textDecoration: 'none',
    display: "flex",
    fontSize: 54,
    fontWeight: "bold",
    letterSpacing: 1,
    color: "#99cff"

}
const color = amber[800];

const colour = green[800];
const cardsty = {
    color: colour
}
const fontstyle = {
    display: "flex",
    fontSize: 34,
}
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 3,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
    image: {
            width: 256,
            height: 256,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    }
}));

const useStyles3 = makeStyles({
    root: {
        minWidth:200
        
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

const useStyles2 = makeStyles(styles);

const Tab1 = () => { 
    const classes = useStyles();
    const classes2 = useStyles2();
    const classes3 = useStyles3();
    {
        return (<div>
            
                
            
                <h1 style={headStyle}> IndraDhanusha</h1>
                <h2> Youth Social Foundation </h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20 }}>
                <Fade bottom big>
                <div>
                        <Paper elevation={5}><p className="tab1 "> IndraDhanusha was founded with the aim of establishing a systemic
                        value chain in the agrarian millet industry. With the judicious use of scientific techniques
                        along with inventing a market for the industry, we strive to develop
                            a efficient model for the growth of the millet industry </p></Paper></div>
                    <div>
                <img
                    src={aboutus2}
                    alt="..."
                    className={
                        classes2.imgRaised +
                        " " +
                        classes2.imgRounded +
                        " " +
                        classes2.imgFluid
                    }
                        /></div> </Fade></div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20 }}>

                
                    <div><img
                        src={aboutus}
                        alt="..."
                        className={
                            classes2.imgRaised +
                            " " +
                            classes2.imgRounded +
                            " " +
                            classes2.imgFluid
                        }
                    /> <Paper elevation={5}><p className="tab1 "> Our Goal is to provide a strong economic structure to the millet industry by empowering
                            the farmers and rural areas which will result in strengthening their financial condition and give them a lucrative and sustainable crop in the form of millet</p></Paper></div>
                 
            <div>
                    <Paper elevation={7}> <h1 >Current Gaps in Millet Industry</h1></Paper>
                    <Paper elevation={7}> <li className="tab1para"> Inconsistent availability and suitable variety of millet grains</li></Paper>
                    <Paper elevation={7}> <li className="tab1para"> Inadequate promotional awareness on health aspects</li></Paper>
                    <Paper elevation={7}> <li className="tab1para"> Lack of Organized Procurement system</li></Paper>
                    <Paper elevation={7}> <li className="tab1para"> Lack of Knowledge on processing interventions</li></Paper></div></div>    
            <h1 style={{ textAlign: 'center' }} className="tab1head"> OUR VISION </h1>
            <Paper style={{ backgroundColor: colour }}> <h1 className="tab1head2" > United Nations General Assembly adopted India's resolution to declare year 2023 as <span className="tab1para2" style={{ color: color }}> International Year of Millets </span> </h1> </Paper>
                

                   
            </div>);
    }
}
export default Tab1;