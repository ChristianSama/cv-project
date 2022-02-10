import React from "react";
import SwitchText from "./SwitchText";
import uniqid from "uniqid"

class EducationSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {educations: []}
    this.addEducation = this.addEducation.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
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

  addEducation(event) {
    event.preventDefault();
    const newEducation = {id: uniqid(), level: '', institution: ''};
    this.setState((prevState) => ({
      educations: [...prevState.educations, newEducation]
    }));
  }

  deleteEducation(event) {
    event.preventDefault();
    let filteredArr = this.state.educations.filter(item => item.id !== event.target.id);
    this.setState({educations: filteredArr});
  }

  render() {
    return (
      <div className="educationSection">
        {this.state.educations.map(ed => (
          <Education key={ed.id} edit={this.props.edit} handleChange={this.handleChange} data={ed} deleteEducation={this.deleteEducation}/>
        ))} 
        <button onClick={this.addEducation}>Add Education</button>
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
      <div className="education">
        <div className="input-fields">
          <label>
            Level:
            <SwitchText id={this.props.data.id} edit={this.props.edit} content={this.props.data.level} name="level" handleChange={this.props.handleChange}/>
          </label>
          <label>
            Institution:
            <SwitchText id={this.props.data.id} edit={this.props.edit} content={this.props.data.institution} name="institution" handleChange={this.props.handleChange}/>
          </label>
        </div>
        <button id={this.props.data.id} onClick={this.props.deleteEducation}>Delete</button>
      </div>
    );
  }
}

export default EducationSection;