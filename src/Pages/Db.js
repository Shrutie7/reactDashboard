import React,{ useState } from 'react';
import "./Db.css";
import data from "./mock-data.json";
import data2 from "./mock-data2.json";
import data4 from "./mock-data4.json";

function Dashboard() {
  const [contacts, setContacts] = useState(data);
  const [contacts2, setContacts2] = useState(data2);
  const [contacts4, setContacts4] = useState(data4);
  return (
    <div className='dashboard'>
      <div className='head'>
      <h1>Aircraft</h1>
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
        <div className='head'>
        <h1>Flying Programme for today</h1>
        </div>
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
          {contacts2.map((contact)=><tr>
              <td>{contact.FrameNo}</td>
              <td>{contact.Mission}</td>
              <td>{contact.From} </td>
              <td>{contact.To}</td>
              <td>{contact.Crewdetails}</td>
              <td>{contact.Status}</td>
            </tr>)}

          </tbody>
        </table>


        <table>
          <thead>
          <th>2022-2023</th>
            <th>Total AFT</th>
            <th>AFT day</th>
            <th>AFT night</th>
          </thead>
          <tbody>
          {contacts4.map((contact)=><tr>
              <td>{contact['2022-2023']}</td>
              <td>{contact['Total AFT']}</td>
              <td>{contact['AFT day']} </td>
              <td>{contact['AFT night']}</td>
            </tr>)}

          </tbody>
        </table>


    </div>
  );
}

export default Dashboard;