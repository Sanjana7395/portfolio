import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import { Link } from "react-router-dom"
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles((theme) => ({
  resumeContainer: {
    background: "#233",
    width: "100%"
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.5rem",
    color: "#fff",
    background: "tomato",
    lineHeight: 1,
    padding: "0.5rem 0.5rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "7rem 0rem 3rem 0rem",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "tomato",
  },
  subtitle1: {
    color: "tan",
  },
  description: {
    padding: "0rem 5rem",
  },
  moreButton: {
    color: "tan",
    borderColor: "tan",
    margin: "1rem 1rem",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.resumeContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        About Me
      </Typography>
      <Box component="div" className={classes.description}>
        <Grid container justify="center">
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Hi, my name is Sanjana Srinivas and I am pursuing a Master of Science
            degree (Computer Engineering, Data Science Specialization) at San Jose
            State University, California, USA. I am passionate about Data Science
            and Augmented Reality. Over the past year, I have developed 
            skills which include - Machine Learning,
            Deep Learning, Computer Vision, and Data Mining. Also, I have am
            a Fullstack Developer with 2 years of experience working for one of the
            biggest Information Technology corporation, Wipro Technologies.
            <br />
            To know more about my projects refer the portfolio section.
          </Typography>
          <Box component="div">
            <sapn>
              <Button variant="outlined"
                component={Link}
                to="/Portfolio"
                className={classes.moreButton} >
                Portfolio
                <ArrowForwardIcon />
              </Button>
            </sapn>
            <span>
              <Button variant="outlined"
                onClick={() => window.open(require("../documents/resume_sanjana.pdf"))}
                className={classes.moreButton} >
                Resume
                <ArrowForwardIcon />
              </Button>
            </span>
          </Box>
        </Grid>
      </Box>
      <Box component="div" className={classes.timeLine}>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          Present
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Research Assistant
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            San Jose State University
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Working on reducing compute and memory footprint of depth estimation
            neural network.
          </Typography>
        </Box>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            MS, Computer Engineering
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            San Jose State University
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Specialization - Data Science.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2020
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Full Stack Developer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Wipro Technologies
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Frontend frameworks - Angular, Ionic.
            <br />
            Backend framework - NodeJS.
            <br />
            Databases - MongoDB, Magento, Drupal.
            <br />
            Chatbot - Avaamo
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2017
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            BE, Electronics and Communication
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            PES Institute of Technology
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2013
        </Typography>
      </Box>
    </Box>
  );
};

export default Resume;
