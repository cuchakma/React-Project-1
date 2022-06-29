import React, {Component} from "react";
import Header from "./header";
import Body from "./body";

class Skeleton extends Component{
    render() {
        return (
            <div>
                <Header />
                <Body />
            </div>
        );
    }
}

export default Skeleton;