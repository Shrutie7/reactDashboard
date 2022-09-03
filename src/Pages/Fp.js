import React,{ useState } from 'react';
import "./Fp.css";
import { nanoid } from "nanoid";
import data2 from "./mock-data2.json";



function FlyingProgram() {
  
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
    <div className='FlyingProgram'>
          <div className='head'>
      <button>Create Flying Programme</button>
      </div>
      <form id="form" onSubmit={handleAddFormSubmit}>
        <input type="text" name="FrameNo" required="required" placeholder="Enter Frame No" onChange={handleAddFormChange}/>
        <input type="text" name="Mission" required="required" placeholder="Enter Mission name" onChange={handleAddFormChange}/>
        <input type="text" name="from" required="required" placeholder="Enter From time" onChange={handleAddFormChange}/>
        <input type="text" name="To" required="required" placeholder="Enter To time" onChange={handleAddFormChange}/>
        <input type="text" name="Crewdetails" required="required" placeholder="Enter Crew details" onChange={handleAddFormChange}/>
        <input type="text" name="Status" required="required" placeholder="Enter Status" onChange={handleAddFormChange}/>
        <button type="submit">Add</button>
      </form>
        <table>
          <thead>
            <th>Frame No.</th>
            <th>Mission</th>
            <th>From</th>
            <th>To</th>
            <th>Crew Details</th>
            <th>Status</th>
          </thead>
          <tbody>

          {contacts.map((contact)=><tr>
              <td>{contact.FrameNo}</td>
              <td>{contact.Mission}</td>
              <td>{contact.From} </td>
              <td>{contact.To}</td>
              <td>{contact.Crewdetails}</td>
              <td>{contact.Status}</td>
            </tr>)}

          </tbody>
        </table>

    </div>
  );
}

export default FlyingProgram;