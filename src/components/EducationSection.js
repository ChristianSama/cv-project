import React from "react";
import SwitchText from "./SwitchText";
import uniqid from "uniqid"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

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

  deleteEducation(id, event) {
    let filteredArr = this.state.educations.filter(item => item.id !== id);
    this.setState({educations: filteredArr});
  }

  render() {
    return (
      <section className="educationSection">
        {this.state.educations.map(ed => (
          <Education key={ed.id} edit={this.props.edit} handleChange={this.handleChange} data={ed} deleteEducation={this.deleteEducation}/>
        ))} 
        {this.props.edit &&
          <button onClick={this.addEducation}>Add Education</button>
        }
      </section>
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
            {this.props.edit 
              ? (<select id={this.props.data.id} name="level" value={this.props.data.level} onChange={this.props.handleChange}>
                  <option value="">--Select an option--</option>
                  <option value="Elementary">Elementary</option>
                  <option value="Highschool">Highschool</option>
                  <option value="Undergraduate">Undergraduate</option>
                  <option value="Graduate">Graduate</option>
                </select>)
              : <span>{this.props.data.level}</span>
            }
          </label>
          <label>
            Institution:
            <SwitchText id={this.props.data.id} edit={this.props.edit} content={this.props.data.institution} name="institution" handleChange={this.props.handleChange}/>
          </label>
        </div>
        {this.props.edit && 
          <button className="delete-button" id={this.props.data.id} onClick={() => this.props.deleteEducation(this.props.data.id)}><FontAwesomeIcon icon={faTrashCan}/></button>
        }
      </div>
    );
  }
}

export default EducationSection;