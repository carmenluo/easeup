import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from '../presentational/Input.jsx';


class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      seo_title: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({[event.target.id]:event.target.value})
  }

  render() {
    const {seo_title} = this.state;
    return (
      <from id ="article-form">
        <Input
          text="Movies"
          label="Movies"
          type="text"
          id="Movies"
          value={seo_title}
          handleChange={this.handleChange}
        />
      </from>
    );
  }
}
export default FormContainer;
const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;