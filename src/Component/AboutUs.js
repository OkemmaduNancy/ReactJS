import React, { useEffect, useState } from "react";
import classes from "./AboutUs.module.css";
import { Button } from 'antd';
import { PARAGRAPH } from "./Constant";

class AboutUs extends React.Component {
  state = {
    loadings: false,
  }
  enterLoading = () => {
    this.setState({ loadings: true });

    setTimeout(() => {
      this.setState({ loadings: false })

    }, 3000)
  };

  render() {
    const { loadings } = this.state;
    return (
      <div>
        <h1 className={classes.AboutUs}>About Us</h1>
        {PARAGRAPH.map(paragraph => paragraph.p)
        }
        <div>
        <Button type="primary" loading={loadings} onClick={() => this.enterLoading()} >Read More</Button>
        </div>
      </div >
    );
  }
};

export default AboutUs;
