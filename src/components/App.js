import React, { useState, useEffect } from 'react';
import GeneralSection from "./GeneralSection"
import EducationSection from "./EducationSection"
import ExperienceSection from "./ExperienceSection"

function App() {
  const [isEditing, setIsEditing] = useState(true);

  function handleSubmit(event) {
    event.preventDefault();
    setIsEditing(!isEditing);
  }

  const formButtonValue = isEditing ? 'View' : 'Edit';

  return <div className="app">
            <h1>CV visualizer</h1>
            <form onSubmit={handleSubmit}>
              <h2>General Information</h2>
              <GeneralSection edit={isEditing}/>
              <h2>Education</h2>
              <EducationSection edit={isEditing}/>
              <h2>Work Experience</h2>
              <ExperienceSection edit={isEditing}/>
              <button type="submit" value={formButtonValue}>{formButtonValue}</button>
            </form>
          </div>
}

export default App;
