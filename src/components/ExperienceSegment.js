import React, { useState, useEffect } from 'react';
import SwitchText from './SwitchText';
import uniqid from 'uniqid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

function ExperienceSegment(props) {
  const [experienceList, setExperienceList] = useState([]);

  function handleChange(event) {
    const target = event.target
    const expId = target.id
    const value = target.value;
    const name = target.name;

    const newExperiences = [...experienceList];
    const newExp = newExperiences.find(exp => exp.id === expId);
    newExp[name] = value;
    setExperienceList(newExperiences);
  }

  function addExperience(event) {
    event.preventDefault();
    const newExperience = {id: uniqid(), company: '', position: '', time: ''};
    setExperienceList([...experienceList, newExperience]);
  }

  function deleteExperience(id) {
    let filteredArr = experienceList.filter(item => item.id !== id);
    setExperienceList(filteredArr);
  }

  return (
    <section className="experienceSection">
      {experienceList.map(exp => (
        <Experience key={exp.id} id={exp.id} edit={props.edit} handleChange={handleChange} data={exp} deleteExperience={deleteExperience}/>
      ))} 
      {props.edit &&
        <button onClick={addExperience}>Add Experience</button>
      }
    </section>
  )
}

function Experience(props) {
  return(
    <div className='experience'>
      <div className='input-fields'>
        <label>
          Company Name:
          <SwitchText id={props.data.id} edit={props.edit} content={props.data.company} name="company" handleChange={props.handleChange}></SwitchText>
        </label>
        <label>
          Position:
          <SwitchText id={props.data.id} edit={props.edit} content={props.data.position} name="position" handleChange={props.handleChange}></SwitchText>
        </label>
        <label>
          Time in position (months):
          {props.edit 
            ? (<select id={props.data.id} name="time" value={props.data.time} onChange={props.handleChange}>
                <option value="">--Select an option--</option>
                <option value="less than 1 year">less than 1 year</option>
                <option value="1 to 3 years">1 to 3 years</option>
                <option value="more than 3 years">more than 3 years</option>
              </select>)
            : <span>{props.data.time}</span>
          }
        </label>
      </div>
      {props.edit && 
        <button className='delete-button' id={props.data.id} onClick={() => props.deleteExperience(props.data.id)}><FontAwesomeIcon icon={faTrashCan}/></button>
      }
    </div>
  );
}

export default ExperienceSegment;