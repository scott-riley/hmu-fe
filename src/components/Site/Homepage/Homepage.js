import React, {Component} from "react";

import Btn from '../../Global/Btn/Btn';
import Wrapper from '../../Global/Wrapper/Wrapper';

import Hero from '../../Site/Hero/Hero';
import HowItWorks from '../../Site/HowItWorks/HowItWorks';

import styles from './Homepage.css';

export default class Homepage extends Component {
  render() {
    return(
      <div id="homepage">
        <Hero />
        <HowItWorks />
      </div>
    )
  }
}
