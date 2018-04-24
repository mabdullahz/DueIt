import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


class Footer extends Component{
    render(){
        return(
            <div className="footer-bootom">
                <div className="footer-copyright">
                    <div className="bottom-copyright">
                    DueIt! © 2018
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;