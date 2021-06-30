import React from "react";

import PrimaryNav from "./PrimaryNav.js";
import SecondaryNav from "./SecondaryNav.js";
import Testimonial from "./Testimonial.js";
import "./components/style.css";
import lime from '@material-ui/core/colors/lime';
const color = lime[100];
class Home extends React.Component {
    render() {
        return (
            <div id="page">
                <div id="main" style={{ backgroundColor: color }}>
             
                    <PrimaryNav></PrimaryNav>
                    <SecondaryNav></SecondaryNav>


                    <Testimonial></Testimonial>
                </div>
            </div>
        );
    }
}
export default Home;