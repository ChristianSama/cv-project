import React, { useState } from 'react';
import SwitchText from "./SwitchText";

function GeneralSegment(props) {
  const [info, setInfo] = useState({firstname: '',
                                    lastname: '',
                                    phone: '',
                                    email: ''});

  function handleChange(event) {
    const target = event.target;
    const name = target.name;

    let newInfo = { ...info };
    newInfo[name] = target.value;
    setInfo(newInfo);
  }

  return (
    <section className="generalInfo">
      <label>
        First name:
        <SwitchText name='firstname' edit={props.edit} content={info.firstname} handleChange={handleChange}/>
      </label>
      <label>
        Last name:
        <SwitchText name='lastname' edit={props.edit} content={info.lastname} handleChange={handleChange}/>
      </label>
      <label>
        Phone Number:
        <SwitchText name='phone' edit={props.edit} content={info.phone} handleChange={handleChange}/>
      </label>
      <label>
        E-mail:
        <SwitchText name='email' edit={props.edit} content={info.email} handleChange={handleChange}/>
      </label>
    </section>
  );
}

export default GeneralSegment;