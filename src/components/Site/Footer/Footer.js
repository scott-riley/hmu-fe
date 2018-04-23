import React, {Component} from "react";

import Btn from '../../Global/Btn/Btn';
import Wrapper from '../../Global/Wrapper/Wrapper';

import s from './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <footer className={s.root}>
        <Wrapper>
          <p className={s.copyNotice}>
            &copy; Forever and ever until the end of time. Made with slight like and Doomtree by <a className={s.link} href="http://twitter.com/scott_riley">@scott_riley</a>
          </p>
        </Wrapper>
      </footer>
    )
  }
}
