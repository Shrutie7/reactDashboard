import React,{ useState } from 'react';
import { nanoid } from "nanoid";
import data2 from "./mock-data2.json";



function CreateFlyingProgram() {

  const [contacts, setContacts] = useState(data2);
  const [addFormData, setAddFormData]=useState({
    FrameNo: '',
    Mission:'',
    from:'',
    To:'',
    CrewDetails:'',
    Status:'',
  });

  const handleAddFormChange=(event)=>{
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue=event.target.value;

    const newFormData={ ...addFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };
  const handleAddFormSubmit = (event)=>{
    event.preventDefault();

    const newContact={
      id: nanoid(),
      FrameNo: addFormData.FrameNo,
      Mission: addFormData.Mission,
      From: addFormData.from,
      To: addFormData.To,
      Crewdetails: addFormData.Crewdetails,
      Status: addFormData.Status,

    };
    const newContacts = [ ...contacts, newContact];
    setContacts(newContacts);
  };

  return (
    <div CreateFlyingProgram>
        <form id="form" onSubmit={handleAddFormSubmit}>
        <input type="text" name="FrameNo" required="required" placeholder="Enter Frame No" onChange={handleAddFormChange}/>
        <input type="text" name="Mission" required="required" placeholder="Enter Mission name" onChange={handleAddFormChange}/>
        <input type="text" name="from" required="required" placeholder="Enter From time" onChange={handleAddFormChange}/>
        <input type="text" name="To" required="required" placeholder="Enter To time" onChange={handleAddFormChange}/>
        <input type="text" name="Crewdetails" required="required" placeholder="Enter Crew details" onChange={handleAddFormChange}/>
        <input type="text" name="Status" required="required" placeholder="Enter Status" onChange={handleAddFormChange}/>
        <button type="submit">Add</button>
      </form>


    </div>

  )
}

export default CreateFlyingProgram