import React, {Component} from "react";

class Body extends Component{
    className = 'main';
    render() {
        return (
          <ul className={this.className}>
            <li>Was Released In 2014</li>
            <li>Was Originally Created By Jordan Walke</li>
            <li>Is Maintained By Facebook</li>
            <li>Powers Thousand Of Enterise Application</li>
          </ul>
        );
    }
}

export default Body;