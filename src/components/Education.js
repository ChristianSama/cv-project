import React from "react";
import SwitchText from "./SwitchText";
import uniqid from "uniqid"

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {educations: []}
    this.addEducation = this.addEducation.bind(this);
  }

  addEducation(event) {
    event.preventDefault();
    const newEducation = {id: uniqid(), level: '', institution: ''};
    this.setState((prevState) => ({
      educations: [...prevState.educations, newEducation]
    }));
  }

  // If the state of educations should be stored in this component something like this should be implemented. (NOT COMPLETE)
  // handleChange(event) {
  //   this.setState(prevState => {
  //     const newEducations = [...prevState.educations];
  //     const idx = newEducations.findIndex(edu => edu.id === event.target.key);
  //     newEducations[idx]
  //   })
  // }

  render() {
    return (
      <div className="educationInfo">
        <EducationList edit={this.props.edit} educations={this.state.educations}></EducationList>
        <button onClick={this.addEducation}>Add</button>
      </div>
    );
  }
}

function EducationList(props) {
  return (
    <div className="educationList">
      {props.educations.map(ed => (
        <div key={ed.id}>
            <label>
              Level:
              <SwitchText edit={props.edit}/>
            </label>
            <label>
              Institution:
              <SwitchText edit={props.edit}/>
            </label>
        </div>
      ))} 
    </div>
  )
}

export default Education;