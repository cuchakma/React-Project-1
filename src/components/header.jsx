import React, {Component} from "react";
import logo from '../images/react.png';

class Header extends Component{
    header_classname = 'header-styles';
    render() {
        return (
            <div className={this.header_classname}>
                <div className="header-one">
                    <img src={logo} width="40px"/>
                    <h1>Fun Facts About React</h1>
                </div>
                <div className="header-two">
                    <h1>React Course Project - 2</h1>
                </div>
            </div>
        );
    }
}

export default Header;