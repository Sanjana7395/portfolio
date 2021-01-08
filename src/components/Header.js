import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button"
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom"
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import avatar from "../avatar.jpg";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(25),
    height: theme.spacing(25),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
  moreButton: {
    color: "tan",
    borderColor: "tan",
    marginTop: "1rem",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Sanjana Srinivas" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Sanjana Srinivas"]} typeSpeed={40} />
      </Typography>

      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Data Science | Machine Learning | Computer Vision | <br /> Software Engineer | Full Stack Developer"
          ]}
          typeSpeed={50}
        />
      </Typography>
      <Button variant="outlined" 
      component={Link} 
      to="/resume"
      className={classes.moreButton} >
        Know More
        <ArrowForwardIcon />
      </Button>
    </Box>
  );
};

export default Header;
