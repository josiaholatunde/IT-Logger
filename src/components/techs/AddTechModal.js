import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';
import { addTech } from '../actions/techs';
import { connect } from 'react-redux';
const AddTechModal = ({ addTech }) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');


  const onSubmit = () => {
    if (!firstName || !lastName) {
      M.toast({html: 'Please Enter a valid technician'})
    } else {
      // Submit
      addTech({firstName, lastName});
      M.toast({html: `${firstName} ${lastName} was successfully added as a tech`})
      setFirstName('');
      setLastName('');
    }
  }


  return (
    <div id='add-tech-modal' className='modal' style={modalStyle}>
      <div className="modal-content">
        <h4>Add New Technician</h4>
        <div className="row">
          <div className='input-field'>
            <input type="text" name="firstName" value={firstName} onChange={({target}) => 
            setFirstName(target.value)} />
            <label htmlFor="firstName" className='active'>First Name</label>
          </div>
        </div>

        <div className="row">
          <div className='input-field'>
            <input type="text" name="lastName" value={lastName} onChange={({target}) => 
            setLastName(target.value)} />
            <label htmlFor="lastName" className='active'>Last Name</label>
          </div>
        </div>
      </div>
      <div className="modal-content">
        <a href='#!' onClick={onSubmit} className='modal-close blue btn btn-light waves-effect waves-green'>Enter</a>
      </div>
    </div>
  )
}

const modalStyle = {
  width: '75%',
  height: '75%'
}

export default connect(null,{ addTech })(AddTechModal);
