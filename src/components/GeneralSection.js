import { Component } from "react";
import SwitchText from "./SwitchText";

class GeneralSection extends Component {
  constructor(props) {
    super(props);
    this.state = {firstname: '',
                  lastname: '',
                  phone: '',
                  email: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: target.value
    })
  }

  render() {
    return (
      <section className="generalInfo">
        <label>
          First name:
          <SwitchText name='firstname' edit={this.props.edit} content={this.state.firstname} handleChange={this.handleChange}/>
        </label>
        <label>
          Last name:
          <SwitchText name='lastname' edit={this.props.edit} content={this.state.lastname} handleChange={this.handleChange}/>
        </label>
        <label>
          Phone Number:
          <SwitchText name='phone' edit={this.props.edit} content={this.state.phone} handleChange={this.handleChange}/>
        </label>
        <label>
          E-mail:
          <SwitchText name='email' edit={this.props.edit} content={this.state.email} handleChange={this.handleChange}/>
        </label>
      </section>
    );
  }
}

export default GeneralSection;