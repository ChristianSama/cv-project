import React, { useState } from 'react';
import SwitchText from "./SwitchText";
import uniqid from "uniqid"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
  
function EducationSegment(props) {
  const [educationList, setEducationList] = useState([]);

  function handleChange(event) {
    const target = event.target
    const educationId = target.id
    const value = target.value;
    const name = target.name;

    const newEducations = [...educationList];
    const newEd = newEducations.find(ed => ed.id === educationId);
    newEd[name] = value;
    setEducationList(newEducations);
  }

  function addEducation(event) {
    event.preventDefault();
    const newEducation = {id: uniqid(), level: '', institution: ''};

    setEducationList([...educationList, newEducation]);
  }
    
  function deleteEducation(id) {
    let filteredArr = educationList.filter(item => item.id !== id);
    setEducationList(filteredArr);
  }
     
  return (
    <section className="educationSection">
        {educationList.map(ed => (
          <Education key={ed.id} edit={props.edit} handleChange={handleChange} data={ed} deleteEducation={deleteEducation}/>
        ))} 
        {props.edit &&
          <button onClick={addEducation}>Add Education</button>
        }
      </section>
  );
}

function Education(props) {
  return (
    <div className="education">
      <div className="input-fields">
        <label>
          Level:
          {props.edit 
            ? (<select id={props.data.id} name="level" value={props.data.level} onChange={props.handleChange}>
                <option value="">--Select an option--</option>
                <option value="Elementary">Elementary</option>
                <option value="Highschool">Highschool</option>
                <option value="Undergraduate">Undergraduate</option>
                <option value="Graduate">Graduate</option>
              </select>)
            : <span>{props.data.level}</span>
          }
        </label>
        <label>
          Institution:
          <SwitchText id={props.data.id} edit={props.edit} content={props.data.institution} name="institution" handleChange={props.handleChange}/>
        </label>
      </div>
      {props.edit && 
        <button className="delete-button" id={props.data.id} onClick={() => props.deleteEducation(props.data.id)}><FontAwesomeIcon icon={faTrashCan}/></button>
      }
    </div>
  );
}

export default EducationSegment;