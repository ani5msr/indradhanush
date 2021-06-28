import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import "./style.css"
import Mainfeat from './Mainfeat';
import Paper from '@material-ui/core/Paper';
import Fade from 'react-reveal/Fade';
import green from '@material-ui/core/colors/green';


const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
}));

const colour = green[800];

const mainFeaturedPost = {
    title: 'Millets-A Super Food',
    description:
        "Often referred to as a Super food,Millets are making a comeback in the indian market owing to it being highly nutritious and disease prevention qualities alongwith providing multidimensional benefits related to nutrition security,food systems security,and farmers welfare",
    image: 'https://source.unsplash.com/random',
    imgText: 'main image description',
    linkText: 'Continue reading…',
};




export default function Blog() {
    const classes = useStyles();

    return (
        <React.Fragment>
            
          
               
                <main>
                    
                        <Mainfeat post={mainFeaturedPost} />
                        
                   
                    
            </main>
            
            
               </React.Fragment>
    );
}