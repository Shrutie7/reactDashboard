import React,{ useState } from 'react';
import data3 from "./mock-data3.json";
import "./As.css";


function Aircraftstatus() {
  const [contacts, setContacts] = useState(data3);
  return (
    <div className='Aircraftstatus'>
      <div id='head'>
      <h1>Aircraft state</h1>
      </div>
      <div className='bu'>
        <button className="butt">Add Aircraft</button>
      </div>
       <table>
          <thead>
            <th>Frame No.</th>
            <th>Type of Aircraft</th>
            <th>Equipment</th>
            <th>Status</th>
            <th>S/U</th>
            <th>Remarks</th>
          </thead>
          <tbody>
            {contacts.map((contact)=><tr>
              <td>{contact['Frame No']}</td>
              <td>{contact['Type of Aircraft']}</td>
              <td>{contact.Equipment} </td>
              <td>{contact.Status}</td>
              <td>{contact['S/U']}</td>
              <td>{contact.Remarks}</td>
            </tr>)}

          </tbody>
        </table>
        <div className='button'>
          <button className='bt1'>Save</button>
          <button className='bt2'>Submit</button>
          <button className='bt3'>Cancel</button>
        </div>

    </div>
  );
}

export default Aircraftstatus;