import React from "react";
import "./signup.css";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
var userData = {};
const inputProps = {
    step: 300,
};
const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '150ch',
        },
    },
}));

const Volunteer = () => {
    const classes = useStyles();
    



    const handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    };

   
        return (
            <div className="loginRegister">


                <div className="new-CloseButton">
                    <em
                        className="icon-cancel"
                        onClick={(event) => (window.location.href = "/")}
                    >
                        <i class="fas fa-times"></i>
                    </em>
                </div>
                <div className="loginRegisterLeft">
                    <div className="loginRegisterLeft-bg2 active"></div>

                </div>
                <div className="loginRegisterRight">
                    <div className="loginBox active">
                        <div className="loginRegisterForm">
                            <div className="authHeading">
                                <span
                                    className="authHeading-main"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    A small step towards
                </span>
                                <span className="authHeading-sub">doing something good!</span>
                            </div>

                            <form name="registerForm">
                                <ul className="signupSteps activeStep">
                                    <li>
                                        <span className="field-labels">Sign up </span>

                                        <div className="input-container">
                                            <input
                                                type="text"
                                                placeholder="Full Name"
                                                maxLength="100"
                                                email=""
                                                autoComplete="off"
                                                name="name"
                                                id="name"
                                                onChange={(e) => this.handleChange(e)}
                                            ></input>
                                        </div>
                                    </li>
                                    <li>
                                        <input
                                            name="name"
                                            type="text"
                                            pattern="[a-zA-Z ]*"
                                            maxLength="100"
                                            placeholder="Highest Education "
                                            id="name"
                                            onChange={(e) => this.handleChange(e)}
                                        ></input>
                                    </li><li>
                                        <input
                                            name="name"
                                            type="text"
                                            pattern="[a-zA-Z ]*"
                                            maxLength="100"
                                            placeholder="Professional/ Volunteer Experience "
                                            id="name"
                                            onChange={(e) => this.handleChange(e)}
                                        ></input>
                                    </li>
                                    <div>
                                        <TextField
                                            id="filled-multiline-flexible"
                                            label="Address (4 lines)"
                                            multiline
                                            rowsMax={4}


                                            variant="filled"
                                        />  </div><li>
                                        <input
                                            name="name"
                                            type="text"
                                            pattern="[a-zA-Z ]*"
                                            maxLength="100"
                                            placeholder="Areas of interest "
                                            id="name"

                                            onChange={(e) => this.handleChange(e)}
                                        ></input>
                                    </li><li>
                                        <div>
                                            <TextField
                                                id="filled-multiline-flexible"
                                                label="Describe your motivation to work for us"
                                                multiline
                                                rowsMax={10}


                                                variant="filled"
                                            />  </div><input
                                                className="form-control"
                                                placeholder="Mobile Number"
                                                type="text"
                                                maxLength="20"
                                                onChange={(e) => this.handleChange(e)}
                                                id="contactNumber"
                                                onChange={(e) => this.handleChange(e)}
                                                onChange={(e) => this.handleChange(e)}
                                            ></input>
                                    </li>
                                    <li>
                                        <div className="relativeRow">
                                           
                                        </div>
                                    </li>
                                    <li>
                                        <button
                                            type="submit"
                                            className="submitButton"

                                        >
                                            <span className="icon-right"></span> Submit{" "}
                                        </button>
                                    </li>
                                   </ul>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

export default Volunteer;


