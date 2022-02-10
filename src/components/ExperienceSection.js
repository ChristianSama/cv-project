import React from 'react';
import SwitchText from './SwitchText';
import uniqid from 'uniqid';

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

  deleteExperience(event) {
    event.preventDefault();
    let filteredArr = this.state.experiences.filter(item => item.id !== event.target.id);
    this.setState({experiences: filteredArr});
  }

  render() {
    return (
      <div className="experienceSection">
        {this.state.experiences.map(exp => (
          <Experience key={exp.id} id={exp.id} edit={this.props.edit} handleChange={this.handleChange} data={exp} deleteExperience={this.deleteExperience}/>
        ))} 
        <button onClick={this.addExperience}>Add Experience</button>
      </div>
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
          <SwitchText id={this.props.data.id} edit={this.props.edit} content={this.props.data.time} name="time" handleChange={this.props.handleChange}></SwitchText>
        </label>
        <button id={this.props.data.id} onClick={this.props.deleteExperience}>Delete</button>
      </div>
    );
  }
}

export default ExperienceSection;