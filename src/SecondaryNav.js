import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Testimonial from "./Testimonial.js";
import Tab1 from "./components/Tab1.js";
import volunteer from "./components/volunteer.js";
import Tab2 from "./components/Tab2.js";
import Tab3 from "./components/Tab3.js";
import lime from '@material-ui/core/colors/lime';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}
const color = lime[100];
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: color
    },
}));
const useStyles2 = makeStyles({
    root: {
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: "black",
        height: 48,
        padding: '0 30px',
        fontWeight: "bold"
    }
})

export default function SecondaryNav() {
    const classes = useStyles();
    const classes2 = useStyles2();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="white"
                    aria-label="scrollable auto tabs example"
                  
                    centered 
                >
                    <Tab label="About Us" {...a11yProps(0)} className={classes2.root}/>
                    <Tab label="Glossary" {...a11yProps(1)} className={classes2.root}/>
                    <Tab label="Know About Millets" {...a11yProps(2)} className={classes2.root} />
                    <Tab label="Our Work" {...a11yProps(3)} className={classes2.root}/>
                    <Tab label="Achievements" {...a11yProps(4)} className={classes2.root} />
                    
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Tab1 />
      </TabPanel>
            <TabPanel value={value} index={1}>
               
      </TabPanel>
            <TabPanel value={value} index={2}>
               <Tab3 />
      </TabPanel>
            <TabPanel value={value} index={3}>
                <Tab2 />
      </TabPanel>
            <TabPanel value={value} index={4}>
             
      </TabPanel>
            
        </div>
    );
}



