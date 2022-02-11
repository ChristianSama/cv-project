import React from 'react';
import SwitchText from './SwitchText';
import uniqid from 'uniqid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

class ExperienceSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {experiences: []};
    this.addExperience = this.addExperience.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);
  }

  handleChange(event) {
    const target = event.target
    const expId = target.id
    const value = target.value;
    const name = target.name;

    this.setState(prevState => {
      const newExperiences = [...prevState.experiences];
      const newExp = newExperiences.find(exp => exp.id === expId);
      newExp[name] = value;
      return newExperiences;
    })
  }

  addExperience(event) {
    event.preventDefault();
    const newExperience = {id: uniqid(), company: '', position: '', time: ''};
    this.setState((prevState) => ({
      experiences: [...prevState.experiences, newExperience]
    }));
  }

  deleteExperience(id, event) {
    let filteredArr = this.state.experiences.filter(item => item.id !== id);
    this.setState({experiences: filteredArr});
  }

  render() {
    return (
      <section className="experienceSection">
        {this.state.experiences.map(exp => (
          <Experience key={exp.id} id={exp.id} edit={this.props.edit} handleChange={this.handleChange} data={exp} deleteExperience={this.deleteExperience}/>
        ))} 
        {this.props.edit &&
          <button onClick={this.addExperience}>Add Experience</button>
        }
      </section>
    )
  }
}

class Experience extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='experience'>
        <div className='input-fields'>
          <label>
            Company Name:
            <SwitchText id={this.props.data.id} edit={this.props.edit} content={this.props.data.company} name="company" handleChange={this.props.handleChange}></SwitchText>
          </label>
          <label>
            Position:
            <SwitchText id={this.props.data.id} edit={this.props.edit} content={this.props.data.position} name="position" handleChange={this.props.handleChange}></SwitchText>
          </label>
          <label>
            Time in position (months):
            {this.props.edit 
              ? (<select id={this.props.data.id} name="time" value={this.props.data.time} onChange={this.props.handleChange}>
                  <option value="">--Select an option--</option>
                  <option value="less than 1 year">less than 1 year</option>
                  <option value="1 to 3 years">1 to 3 years</option>
                  <option value="more than 3 years">more than 3 years</option>
                </select>)
              : <span>{this.props.data.time}</span>
            }
          </label>
        </div>
        {this.props.edit && 
          <button className='delete-button' id={this.props.data.id} onClick={() => this.props.deleteExperience(this.props.data.id)}><FontAwesomeIcon icon={faTrashCan}/></button>
        }
      </div>
    );
  }
}

export default ExperienceSection;