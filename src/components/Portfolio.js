import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import project1 from "../images/MLChallenge.png";
import project2 from "../images/face_app.png";
import project3 from "../images/segmentation.png";
import project4 from "../images/grape.png";
import project5 from "../images/wildfire.png";
import project6 from "../images/quantization.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  heading: {
    color: "tomato",
    padding: "7rem 0rem 3rem 0rem",
    textTransform: "uppercase",
  },
  card: {
    display: "flex"
  },
}));

const projects = [
  {
    name: "ML Reproducibility Challenge",
    description: `(Participating) The aim of this challenge is to 
    validate the reproducibility of the paper - Self-supervised Monocular
    Trained Depth Estimation using Self-attention and Discrete Disparity
    Volume - accepted in the CVPR-2020 conference. Additionally experiments
    were conducted to analyse the results obtained using space-increasing
    discretization and different weight decay parameters.`,
    image: project1,
    url: "https://github.com/sjsu-smart-lab/MLChallenge",
    demo: "https://github.com/sjsu-smart-lab/MLChallenge",
  },
  {
    name: "Virtual Makeup Application",
    description: `The application helps to try-on different shades of lip
    and hair color. This is done using a backend framework NodeJS and TensorFlowJS to load the model that
    segments different parts of the face. The frontend constitutes of ReactJS and OpenCV.js to change the color
    of the segmented parts.`,
    image: project2,
    url: "https://github.com/Sanjana7395/face_makeup_app",
    demo: "https://github.com/Sanjana7395/face_makeup_app",
  },
  {
    name: "Face Segmentation",
    description: `In this project, each pixel of the frontal face image is
    segmented into 19 regions like lip, nose, left and right eye, etc.
    Tensorflow framework is used to train the U-Net model to learn the 
    segmentation process. CelebAMask-HQ dataset is used for training and
    testing.`,
    image: project3,
    url: "https://github.com/Sanjana7395/Face_segmentation",
    demo: "https://github.com/Sanjana7395/Face_segmentation",
  },
  {
    name: "Grape Disease Detection",
    description: `The project experiments with various Machine Learning
    algorithms namely - Random forest, SVM, VGG16, Custom CNN and Ensemble
    methods(Majority voting and Stacked prediction) - to recognize and classfy
    various diseases in grape plant.`,
    image: project4,
    url: "https://github.com/Sanjana7395/Grape-disease-classification",
    demo: "https://github.com/Sanjana7395/Grape-disease-classification",
  },
  {
    name: "Wildfire Prediction",
    description: `Wildfire is the most common form of a natural disaster.
    Early detection or prediction can promote early response,
    thereby minimizing the adversities caused by the fire.
    Through this project, we propose a model to identify the occurrence of
    wildfire given the temperature and precipitation details of the region.
    The process involved cleaning and merging the two datasets - Washington
    State wildfire
    and temperature - and training them using different models.`,
    image: project5,
    url: "https://github.com/parvathysjsu/CMPE255Project",
    demo: "https://github.com/parvathysjsu/CMPE255Project",
  },
  {
    name: "Improving Situational Awareness for e-Scooter Riders",
    description: `(Ongoing thesis) Current depth estimation algorithms 
    are inaccurate, slow, or costly for our application. The vision of 
    this research investigate techniques like quantization and neural network
    introspection to reduce memory and compute 
    footprint of these neural networks with minimal reduction
    in performance.`,
    image: project6,
    url: "https://github.com/Sanjana7395/static_quantization",
    demo: "https://github.com/Sanjana7395/static_quantization",
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Portfolio
      </Typography>
      <Grid container justify="center">
        {projects.map((project, i) => (
          <Grid item className={classes.card} xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              <CardActions>
                <Button 
                size="small" 
                color="primary" 
                onClick={() => window.open(project.url)}
                >
                  View
                </Button>
                <Button 
                size="small" 
                color="primary" 
                onClick={() => window.open(project.url)}
                >
                  Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
