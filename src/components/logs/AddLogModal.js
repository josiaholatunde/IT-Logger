import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';
import { addLog } from '../actions/logs';
import {connect} from 'react-redux';
import TechSelectOptions from '../techs/TechSelectOptions';

const AddLogModal = ({addLog}) => {

  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');


  const onSubmit = () => {
    if (!message || !tech) {
      M.toast({html: 'Please Enter a message'})
    } else {
      // Submit
      addLog({message, attention, tech, date: Date.now()});

      M.toast({html: `Log added by ${tech}`});
      setMessage('');
      setAttention(false);
      setTech('');
    }
  }


  return (
    <div id='add-log-modal' className='modal' style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className='input-field'>
            <input type="text" name="message" value={message} onChange={({target}) => setMessage(target.value)} />
            <label htmlFor="message" className='active'>Log Message</label>
          </div>
        </div>

        <div className="row">
          <div className='input-field'>
            <select name="tech" value={tech} onChange={({target}) => setTech(target.value)} className='browser-default'>
              <option value='' disabled></option>
              <TechSelectOptions />
            </select>
            <label htmlFor="message" className='active'>Technician</label>
          </div>
        </div>

        <div className="row">
          <div className='input-field'>
           <p>
           <label htmlFor="message" className='active'>
            <input type="checkbox" className='filled-in' name='attention' checked={attention } value={attention} onChange={() => setAttention(!attention)} />
            <span>Needs Attention</span>
           </label>
           </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a href='#!' onClick={onSubmit} className='modal-close blue btn btn-light waves-effect'>Enter</a>
      </div>
    </div>
  )
}

const modalStyle = {
  width: '75%',
  height: '75%'
}

export default connect(null, { addLog })(AddLogModal)
