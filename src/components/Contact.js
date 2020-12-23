import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box";
import EmailIcon from '@material-ui/icons/Email';
import Typography from "@material-ui/core/Typography";
import Footer from "../components/Footer";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "90vh",
  },
  heading: {
    color: "tomato",
    textAlign: "center",
    textTransform: "uppercase",
    padding: "5rem 0rem",
  },
  subtitle1: {
    color: "tan",
  },
  listclass: {
    padding: "2rem 0rem",
  },
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Typography variant="h5" className={classes.heading}>
        Hire or Contact me...
      </Typography>
      <Grid container justify="center">
        <List className={classes.listclass}>
          <ListItem>
            <ListItemIcon className={classes.subtitle1}>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText className={classes.subtitle1} primary={
              <React.Fragment>
                <Typography
                  component="span"
                >
                  Email -
                  </Typography>
                {" sanjana.srinivas@sjsu.edu"}
              </React.Fragment>
            } />
          </ListItem>
        </List>
      </Grid>
      <Footer />
    </Box>
  );
};

export default Contact;
