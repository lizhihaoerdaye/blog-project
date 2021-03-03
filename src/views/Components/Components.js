import React from "react";

// import classNames from "classnames";

// import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import Header from "../../components/Header/Header.js";
// import Footer from "components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
// import Button from "components/CustomButtons/Button.js";
import Parallax from "../../components/Parallax/Parallax.js";

import HeaderLinks from "../../components/Header/HeaderLinks.js";
// import SectionBasics from "./Sections/SectionBasics.js";
// import SectionNavbars from "./Sections/SectionNavbars.js";
// import SectionTabs from "./Sections/SectionTabs.js";
// import SectionPills from "./Sections/SectionPills.js";
// import SectionNotifications from "./Sections/SectionNotifications.js";
// import SectionTypography from "./Sections/SectionTypography.js";
// import SectionJavascript from "./Sections/SectionJavascript.js";
// import SectionCarousel from "./Sections/SectionCarousel.js";
// import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js";
// import SectionLogin from "./Sections/SectionLogin.js";
// import SectionExamples from "./Sections/SectionExamples.js";
// import SectionDownload from "./Sections/SectionDownload.js";

import styles from "../../assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="React博客展示"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("../../assets/img/bg3.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>浩大大地博客</h1>
                <h3 className={classes.subtitle}>
                  一个基于React和Material-UI的博客
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      {/* <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p> */}
      {/* <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionBasics />
        <SectionNavbars />
        <SectionTabs />
        <SectionPills />
        <SectionNotifications />
        <SectionTypography />
        <SectionJavascript />
        <SectionCarousel />
        <SectionCompletedExamples />
        <SectionLogin />
        <GridItem md={12} className={classes.textCenter}>
          <Link to={"/login-page"} className={classes.link}>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
          </Link>
        </GridItem>
        <SectionExamples />
        <SectionDownload />
      </div>
      <Footer /> */}
    </div>
  );
}
