import { Component } from "react";

class General extends Component {
  constructor(props) {
    super(props);
    this.state = {firstname: "", lastname: ""};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({[name]: target.value})
  }

  render() {
    let firstname, lastname;
    if (this.props.edit === true) {
      firstname = <input type="text" id="firstname" name="firstname" value={this.state.firstname} onChange={this.handleChange}></input> 
      lastname = <input type="text" id="lastname" name="lastname" value={this.state.lastname} onChange={this.handleChange}></input> 
    } else {
      firstname = <span>{this.state.firstname}</span>
      lastname = <span>{this.state.lastname}</span>
    }
    return (
      <div className="generalInfo">
        <label>
          First name:
          {firstname}
        </label>
        <label>
          Last name:
          {lastname}
        </label>
      </div>
    );
  }
}

export default General;