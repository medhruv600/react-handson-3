import React, { Component } from "react";
import Display from "./Display";

class Form extends Component {
  state = {
    name: "",
    dept: "",
    ratg: "",
    click: true,
    array: [],
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  toggleFunc = () => {
    this.setState({ click: true });
  };

  handleSubmit = () => {
    const newObj = {
      name: this.state.name,
      dept: this.state.dept,
      ratg: this.state.ratg,
    };
    this.state.array.push(newObj);
    this.setState({ array: this.state.array, click: false });
  };

  render() {
    return (
      <div className="App">
        {this.state.click ? (
          <>
            <label className="name">Name : </label>
            <input
              placeholder="Enter name"
              name="name"
              onChange={this.handleChange}
              required
            />

            <br />

            <label className="dept">Department : </label>
            <input
              placeholder="Enter department"
              name="dept"
              onChange={this.handleChange}
              required
            />

            <br />

            <label className="ratg">Rating : </label>
            <input
              placeholder="Enter rating"
              name="ratg"
              onChange={this.handleChange}
              required
            />

            <br />
            <br />

            <button
              className="btn btn-warning btn1"
              onClick={this.handleSubmit}
            >
              Submit
            </button>
          </>
        ) : (
          <Display value={this.state.array} toggle={this.toggleFunc} />
        )}
      </div>
    );
  }
}

export default Form;
