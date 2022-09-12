import React from 'react'

const ReadOnlyRow = ({ contact , handleEditClick ,handleDeleteClick}) => {
  return (
    <tr>
    <td>{contact.FrameNo}</td>
    <td>{contact.Mission}</td>
    <td>{contact.From} </td>
    <td>{contact.To}</td>
    <td>{contact.Crewdetails}</td>
    <td>{contact.Status}</td>
    <td>
      <button type="button" onClick={(event)=>handleEditClick(event,contact)}>Edit</button>
    <button type="button" onClick={()=>handleDeleteClick(contact.id)}>Delete</button>
    </td>
  </tr>
  )
}

export default ReadOnlyRow