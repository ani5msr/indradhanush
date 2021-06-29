import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link'; 
import "./style.css"
import lightGreen from '@material-ui/core/colors/lightGreen';
import Fade from 'react-reveal/Fade';
import green from '@material-ui/core/colors/green';
import lime from '@material-ui/core/colors/lime';
import brown from '@material-ui/core/colors/brown';
import why2 from "../Data/images/why2.jpg"
import why3 from "../Data/images/why3.jpg"
import why4 from "../Data/images/why4.jpg"
import why6 from "../Data/images/why6.jpg"

import indi from "../Data/images/indi.jpg"
import why5 from "../Data/images/why5.png"
import styles from './imagesStyles.js';
const color2 = lime[100];
const color3 = brown[100];

const useStyles1 = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'absolute',

    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(../Data/images/becom.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.0)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));
const color = lightGreen['A200'];
const mil = {
    color: color,
   
}
const useStyles2 = makeStyles(styles);
export default function MainFeat(props) {
    const classes1 = useStyles1();
    const classes2 = useStyles2();
  const { post } = props;

    return (
        <Paper className={classes1.mainFeaturedPost} style={{ backgroundColor: color2 }} >
          <Paper className="millet">
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
      <div className={classes1.overlay} />
      <Grid container>
        <Grid item md={6}>
                        <div className={classes1.mainFeaturedPostContent}>
                            <Paper elevation={10} style={{ backgroundColor: color }} >
                                <Typography align="center" component="h1" variant="h3" color="inherit" gutterBottom>
                                    <span className="millettext">{post.title}</span>

                                </Typography></Paper> <Paper elevation={10} style={{ backgroundColor: color3 }} >
                                <Typography variant="h5" color="inherit" paragraph> <span className="millettext">
              {post.description}</span>
            </Typography></ Paper>
            
          </div>
        </Grid>
              </Grid>
            </Paper>
            <Fade  big>
                <div>
                    <Typography align="left" component="h2" variant="h3"  gutterBottom>
                        <span className="millethead">What are Millets</span></Typography>
                    <h2 className="milletpara"> Millets are coarse grains and a repository of protein, fibre, vitamins and minerals.
                        High in fiber, rich in essential amino acids, vitamins and minerals, naturally gluten-free, alkaline, non-allergenic, they are thus easily digestible.</h2></div>
                <h1 className="milletpara"> 
                A low glycemic index makes them an ideal rice substitute, good for cholesterol, diabetes and weight loss.</h1>


            </Fade>
            <Fade  big>
                <Paper style={{ backgroundColor: color2 }}>
                    <Typography align="left" component="h2" variant="h3" gutterBottom>
                        <span className="millethead">Why Millets</span></Typography>
                </Paper>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20 }}>
                
            <div>
                        <Paper style={{ backgroundColor: color2 }} elevation={5}><h1 className="why" >* Millets are highly resilient </h1>
                            <h2 className="milletpara"> They are least susceptible to damage with climate changes</h2></Paper></div>
                   <div> <img
                        src={why2}
                        alt="..."
                        className={
                            classes2.imgRaised +
                            " " +
                            classes2.imgRounded +
                            " " +
                            classes2.imgFluid
                        }
                    /></div>
               </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20 }}>
               
                    <div>
                        <Paper style={{ backgroundColor: color2 }} elevation={5}><h1 className="why">* Millets provide a viable option for farmers </h1>
                            <h2 className="milletpara"> Millets can survive with minimal water,poor soils, increasing temperatures, no pesticides, very little fertilizers. This
                                makes them affordable, viable for poor marginal farmers, a good risk management strategy</h2></Paper></div>
                  <div>  <img
                        src={why3}
                        alt="..."
                        className={
                            classes2.imgRaised +
                            " " +
                            classes2.imgRounded +
                            " " +
                            classes2.imgFluid
                        }
                    /></div>
             </div>
            
                <div>
                    <Paper style={{ backgroundColor: color2 }} elevation={5}><h1 className="why">* Millets are good for the planet </h1>
                        <h2 className="milletpara"> Grown with minimal pesticides and fertilizers , they cause less strain on soil as compared to other crops</h2></Paper>
                       </div>
           
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: 20 }}>
                
                    <div>
                        <Paper style={{ backgroundColor: color2 }} elevation={5}><h1 className="why">* Millets can be eaten in many forms </h1>
                            <h2 className="milletpara"> From porridges to snacks made from millets, they come in all varieties</h2></Paper></div>
                 <div>   <img
                        src={why4}
                        alt="..."
                        className={
                            classes2.imgRaised +
                            " " +
                            classes2.imgRounded +
                            " " +
                            classes2.imgFluid
                        }
                    /></div>
                 <div>   <img
                        src={why5}
                        alt="..."
                        className={
                            classes2.imgRaised +
                            " " +
                            classes2.imgRounded +
                            " " +
                            classes2.imgFluid
                        }
                    /></div>
                   <div> <img
                        src={why6}
                        alt="..."
                        className={
                            classes2.imgRaised +
                            " " +
                            classes2.imgRounded +
                            " " +
                            classes2.imgFluid
                        }
                    /></div>
                </div>
            
                <div>
                    <Paper style={{ backgroundColor: color2 }} elevation={5}><h1 className="why">* Millets have untapped demands with multiple uses and low awareness </h1>
                        <h2 className="milletpara"> Millets can be used as human food,fodder, biofuel and brewing</h2></Paper></div>
            
            <Paper style={{ backgroundColor: color2 }}>
                <Typography align="left" component="h2" variant="h3" gutterBottom>
                    <span className="millethead">How are millets changing the world</span></Typography>
            </Paper>
            
                <div>
                <Paper style={{ backgroundColor: color2 }}>  <h2 className="milletpara"> Millets are tackling some of the world's biggest problems in unison</h2>
                    <p className="milletpara2" > Poor Diet and health</p>
                    <p className="milletpara2"> Environment issues</p>
                    <p className="milletpara2"> Rural poverty</p></Paper>
                <img
                    src={indi}
                    alt="..."
                    className={
                        classes2.imgRaised +
                        " " +
                        classes2.imgRounded +
                        " " +
                        classes2.imgFluid
                    }
                />

                </div>

            </Fade>
           
        </Paper>
        
       
  );
}

MainFeat.propTypes = {
  post: PropTypes.object,
};