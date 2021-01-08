import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import DescriptionIcon from '@material-ui/icons/Description';

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
    width: '100%',
    position: 'fixed',
    bottom: 0,
    height: "100px",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      color: "tan",
      fontSize: "2rem",
      "&:hover": {
        fill: "tomato",
        color: "tomato",
        fontSize: "2.5rem",
      },
    },
    "& .MuiBottomNavigationAction-label": {
      color: "tan",
      "&:hover": {
        color: "tomato",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer} showLabels>
      <BottomNavigationAction 
      label="LinkedIn" 
      icon={<LinkedInIcon />} 
      className={classes.root}
      onClick={() => window.open("https://www.linkedin.com/in/sanjana-srinivas-04a363125/")} />
      <BottomNavigationAction 
      label="Github" 
      icon={<GitHubIcon />} 
      className={classes.root}
      onClick={() => window.open("https://github.com/Sanjana7395")} />
      <BottomNavigationAction 
      label="Meduim" 
      icon={<DescriptionIcon />} 
      className={classes.root}
      onClick={() => window.open("https://medium.com/@sanjanasrinivas73")} />
    </BottomNavigation>
  );
};
export default Footer;
