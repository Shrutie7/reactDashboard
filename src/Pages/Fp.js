import React,{ useState,Fragment } from 'react';
import "./Fp.css";
import { nanoid } from "nanoid";
import data2 from "./mock-data2.json";
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';



function FlyingProgram() {
  
    const [contacts, setContacts] = useState(data2);
    const [addFormData, setAddFormData]=useState({
      FrameNo: '',
      Mission:'',
      From:'',
      To:'',
      Crewdetails:'',
      Status:'',
    });
    // if editcontactId is null i.e user is not editing any row we want to add a ternary condition to render either the editable row or the read only row depending if we have an editContactId or not

    // create a state to hold form data when we are editing a row in form 
    const [ editFormData, setEditFormData] = useState({
      FrameNo: '',
      Mission:'',
      From:'',
      To:'',
      Crewdetails:'',
      Status:'',
})
    const[editcontactId,setEditContactId]=useState(null);
  
    const handleAddFormChange=(event)=>{
      event.preventDefault();
  
      const fieldName = event.target.getAttribute("name");
      const fieldValue=event.target.value;
  
      const newFormData={ ...addFormData};
      newFormData[fieldName] = fieldValue;
  
      setAddFormData(newFormData);
    };

    // we want to update state when any of the form values change 

    const handleEditFormChange =(event)=>{
      event.preventDefault();

      const fieldName = event.target.getAttribute("name");
      const fieldValue=event.target.value;

      const newFormData = {...editFormData};
      newFormData[fieldName]=fieldValue;

      setEditFormData(newFormData)



    }

    const handleAddFormSubmit = (event)=>{
      event.preventDefault();
  
      const newContact={
        id: nanoid(),
        FrameNo: addFormData.FrameNo,
        Mission: addFormData.Mission,
        From: addFormData.From,
        To: addFormData.To,
        Crewdetails: addFormData.Crewdetails,
        Status: addFormData.Status,
  
      };
      const newContacts = [ ...contacts, newContact];
      setContacts(newContacts);
    };

    const handleEditFormSubmit=(event)=>{
      event.preventDefault();

      const editedContact={
        id: editcontactId,
        FrameNo: editFormData.FrameNo,
        Mission: editFormData.Mission,
        From: editFormData.From,
        To: editFormData.To,
        Crewdetails: editFormData.Crewdetails,
        Status: editFormData.Status,
  
      };

      const newContacts = [ ...contacts];
      const index=contacts.findIndex((contact)=>contact.id===editcontactId);

      newContacts[index]=editedContact;
      setContacts(newContacts);
      setEditContactId(null);



    }

    const handleEditClick = (event,contact)=>{

      event.preventDefault();
      setEditContactId(contact.id);
// we want to prepopulate the contact data from that row when the user clicks the edit button 

const formValues={
  FrameNo:contact.FrameNo,
  Mission:contact.Mission,
  From:contact.From,
  To:contact.To,
  Crewdetails:contact.Crewdetails,
  Status:contact.Status,
}

setEditFormData(formValues)


    }

    const handleCancelClick =()=>{
      setEditContactId(null);
    }

// contactId would be used to find the index of that contact
    const handleDeleteClick=(contactId)=>
    {
      const newContacts=[...contacts];

      const index = contacts.findIndex((contact)=>contact.id===contactId)

      // using splice method to remove the contact object at the given index in the array 

      newContacts.splice(index,1);

      setContacts(newContacts);

// delete button will be in ReadOnlyRow component !!!



    }



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
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <th>Frame No.</th>
            <th>Mission</th>
            <th>From</th>
            <th>To</th>
            <th>Crew Details</th>
            <th>Status</th>
            <th>Actions</th>
          </thead>
          <tbody>

{/* if the id of the current contact object matches the id stored in state in editContactIdstatehook then it would render <EditableRow/> else <ReadOnlyRow/> */}



          {contacts.map((contact)=>(
          <Fragment>
            {editcontactId===contact.id ? (
               <EditableRow editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick}/>
               ): (
               <ReadOnlyRow contact = {contact} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick}/> 
               )}
            
              
         
              
          </Fragment>
          ))}

          </tbody>
        </table>
      </form>

    </div>
  );
}

export default FlyingProgram;