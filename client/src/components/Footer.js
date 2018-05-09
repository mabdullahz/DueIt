import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {Popover, Button, OverlayTrigger} from "react-bootstrap";

const popoverTopTeam =  (
      <Popover id="popover-positioned-top" title="Our Amazing Team">
        <ul>
            <li>
                Muhammad Abullah Zafar
            </li>
            <li>
                Muhammad Ali Ashraf
            </li>
            <li>
                Muhammad Ibrahim
            </li>
            <li>
                Muhammad Talal Bin Yousaf
            </li>
            <li>
                Muhammad Usama Imam
            </li>
        </ul>
      </Popover>
);

const popoverTopAbout =  (
      <Popover id="popover-positioned-top" title="About DueIt!">
        <strong>DueIt!</strong> is a web-based application which makes its easier for its users to plan events wih their friends and share their schedules
      </Popover>
);

class Footer extends Component{
    render(){
        return(
            <div className="footer-bootom">
                <div className="footer-copyright">
                    <div className="bottom-copyright">
                    DueIt! © 2018
                    </div>
                </div>
                <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popoverTopTeam}>
                    <div className="bottom-copyright">
                        Team
                    </div>
                </OverlayTrigger>
                <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popoverTopAbout}>
                    <div className="bottom-copyright">
                        About
                    </div>
                </OverlayTrigger>
            </div>
        );
    }
}

export default Footer;
