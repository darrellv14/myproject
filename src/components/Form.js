import { Component } from "react";

class Form extends Component {
  state = {
    firstname: "",
    lastname: "",
  };
  handleChange = (event) => {
    this.setState({
      firstname: event.target.value,
    });
  };

  handleLastNameChange = (event) => {
    this.setState({
      lastname: event.target.value,
    });
  };
  render() {
    return (
      <div>
        Form
        <form>
          <input
            onChange={this.handleChange}
            type="text"
            value={this.state.firstname}
            placeholder="firstname"
          ></input>

          <input
            value={this.state.lastname}
            type="text"
            onChange={this.handleLastNameChange}
            placeholder='lastname'
          ></input>
        </form>
      </div>
    );
  }
}

export default Form;
