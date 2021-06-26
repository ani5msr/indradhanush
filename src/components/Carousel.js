import React , { Component } from "react";

import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';
import Slider from "react-slick";
import mit from "../Data/images/Actr.jpg";
import m from "../Data/images/ActR2.jpeg";
import mt from "../Data/images/ActR3.jpeg"
import GridContainer from "./GridContainer.js";
import GridItem from "./GridItem.js";
// import Image from  
// const image = require("../Data/images/mit.jpg"); 

import "./style.css";
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function Carousel() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        adaptiveHeight: true,
       
    };
    return (
     
        <Slider {...settings}>
            <div>
                <h3>
                    </h3>
                <img className="img" src={mit} className="img" />  
            </div>
            <div>
                <h3><img className="img" src={mit} className="img" /></h3>
            
            </div>
            <div>
                <h3><img className="img" src={mit} className="img" /></h3>
              
            </div>
           
                </Slider>
          
    );
}
//change image in media queries for smaller 
//screen size or use SVG