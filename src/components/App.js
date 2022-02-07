import { Component } from "react";
import GeneralSection from "./GeneralSection"
import EducationSection from "./EducationSection"

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {edit: true}
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState(prevState => ({
      edit: !prevState.edit
    })); 
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <GeneralSection edit={this.state.edit}/>
          <EducationSection edit={this.state.edit}/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default App;
