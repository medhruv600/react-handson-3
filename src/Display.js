import React, { Component } from "react";

export default class Display extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
  }
  render() {
    return (
      <>
        <div className="mainbox container">
          {this.props.value.map((item, index) => {
            // console.log(item.name);
            return (
              <span className="container box1" key={index}>
                <span>
                  Name : {item.name} | Department : {item.dept} | Rating :{" "}
                  {item.ratg}
                </span>
              </span>
            );
          })}
        </div>

        <br />

        <button className="btn btn-warning btn2" onClick={this.props.toggle}>
          GO BACK
        </button>
      </>
    );
  }
}
