import { Component } from "react";
import GeneralSection from "./GeneralSection"
import EducationSection from "./EducationSection"
import ExperienceSection from "./ExperienceSection"

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
    const formButtonValue = this.state.edit ? 'View' : 'Edit';
    return (
      <div className="app">
        <h1>CV visualizer</h1>
        <form onSubmit={this.handleSubmit}>
          <h2>General Information</h2>
          <GeneralSection edit={this.state.edit}/>
          <h2>Education</h2>
          <EducationSection edit={this.state.edit}/>
          <h2>Work Experience</h2>
          <ExperienceSection edit={this.state.edit}/>
          <button type="submit" value={formButtonValue}>{formButtonValue}</button>
        </form>
      </div>
    );
  }
}

export default App;
