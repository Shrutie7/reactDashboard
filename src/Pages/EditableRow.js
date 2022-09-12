import React from 'react'

const EditableRow = ({editFormData,handleEditFormChange,handleCancelClick}) => {
  return (
    // we want to prepopulate i/p field values but it is in editFormData prop object hence we can add value prop to each input


    <tr>
        <td><input type="number" required="required" placeholder='enter frame number' name="FrameNo" value={editFormData.FrameNo} onChange={handleEditFormChange}></input></td>
        <td><input type="text" required="required" placeholder='enter mission' name="Mission" value={editFormData.Mission} onChange={handleEditFormChange}></input></td>
        <td><input type="time" required="required" placeholder='enter from time' name="From" value={editFormData.From} onChange={handleEditFormChange}></input></td>
        <td><input type="time" required="required" placeholder='enter to time' name="To" value={editFormData.To} onChange={handleEditFormChange}></input></td>
        <td><input type="text" required="required" placeholder='enter Crew details' name="Crewdetails" value={editFormData.Crewdetails} onChange={handleEditFormChange}></input></td>
        <td><input type="text" required="required" placeholder='enter Status' name="Status" value={editFormData.Status} onChange={handleEditFormChange}></input></td>
<td>
  <button type="submit">Save</button>
  <button type="button" onClick={handleCancelClick}>Cancel</button>
</td>
    </tr>
  )
}

export default EditableRow



{/* <input type="button">
<input type="checkbox">
<input type="color">
<input type="date">
<input type="datetime-local">
<input type="email">
<input type="file">
<input type="hidden">
<input type="image">
<input type="month">
<input type="number">
<input type="password">
<input type="radio">
<input type="range">
<input type="reset">
<input type="search">
<input type="submit">
<input type="tel">
<input type="text">
<input type="time">
<input type="url">
<input type="week"></input> */}