import React, { useState, useEffect } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';
import {connect} from 'react-redux';
import { updateLog } from '../actions/logs';
import TechSelectOptions from '../techs/TechSelectOptions';

const EditLogModal = ({ current, updateLog }) => {

  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');


  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setTech(current.tech);
    }
  //eslint-disable-next-line
  }, [current])
  const onSubmit = () => {
    if (!message || !tech) {
      M.toast({html: 'Please Enter a message'})
    } else {
      // Submit
      updateLog({message, attention, tech, date: Date.now()})
      M.toast({html: `Successfully updated Log by ${tech} `});
      setMessage('');
      setAttention(false);
      setTech('');
    }
  }


  return (
    <div id='edit-log-modal' className='modal' style={modalStyle}>
      <div className="modal-content">
        <h4>Edit System Log</h4>
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
            <label htmlFor="message" className='active'>Log Message</label>
          </div>
        </div>

        <div className="row">
          <div className='input-field'>
           <p>
           <label htmlFor="message" className='active'>
            <input type="checkbox" className='filled-in' checked={attention } value={attention} onChange={({target}) => setAttention(!target.value)} />
            <span>Needs Attention</span>
           </label>
           </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a href='#!' onClick={onSubmit} className='modal-close btn btn-light blue waves-effect waves-green'>Edit</a>
      </div>
    </div>
  )
}

const modalStyle = {
  width: '75%',
  height: '75%'
}

const mapStateToProps = state => ({
  current: state.log.current
})

export default connect(mapStateToProps, { updateLog })(EditLogModal);
