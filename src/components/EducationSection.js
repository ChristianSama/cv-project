import React from "react";
import SwitchText from "./SwitchText";
import uniqid from "uniqid"

class EducationSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {educations: []}
    this.addEducation = this.addEducation.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addEducation(event) {
    event.preventDefault();
    const newEducation = {id: uniqid(), level: '', institution: ''};
    this.setState((prevState) => ({
      educations: [...prevState.educations, newEducation]
    }));
  }

  handleChange(event) {
    const target = event.target
    const educationId = target.id
    const value = target.value;
    const name = target.name;

    this.setState(prevState => {
      const newEducations = [...prevState.educations];
      const newEd = newEducations.find(ed => ed.id === educationId);
      newEd[name] = value;
      return newEducations;
    })
  }

  render() {
    return (
      <div className="educationSection">
        {this.state.educations.map(ed => (
          <Education key={ed.id} id={ed.id} edit={this.props.edit} level={ed.level} institution={ed.institution} handleChange={this.handleChange}></Education>
        ))} 
        <button onClick={this.addEducation}>Add</button>
      </div>
    )
  }
}

class Education extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <label>
          Level:
          <SwitchText id={this.props.id} edit={this.props.edit} content={this.props.level} name="level" handleChange={this.props.handleChange}/>
        </label>
        <label>
          Institution:
          <SwitchText id={this.props.id} edit={this.props.edit} content={this.props.institution} name="institution" handleChange={this.props.handleChange}/>
        </label>
      </div>
    );
  }
}

export default EducationSection;