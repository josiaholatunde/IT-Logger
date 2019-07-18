import React from 'react'
import Moment from 'react-moment';
import {deleteLog, setCurrent} from '../actions/logs';
import { connect } from 'react-redux'

const LogItem = ({ log, deleteLog, setCurrent }) => {

  const { id, message, attention, tech, date } = log;
  
  return (
    <li className="collection-item">
      <div>
        <a href="#edit-log-modal"
         className={`modal-trigger ${ attention ? 'red-text': 'blue-text'}`}
         onClick={() => setCurrent(log)}
         > 
         { message } </a>
         <br/>
         <span className="grey-text">
          <span className="black-text">ID #{id} </span>last updated by {' '}
          <span className="black-text"> {tech} </span> on  {' '}
          <Moment format='MMMM Do YYYY, h:mm:ss a'>
            {date}
          </Moment>
          <a href='#!' className='secondary-content' onClick={() => deleteLog(id)}>
            <i className='material-icons'>delete</i>
          </a>
         </span>
      </div>
    </li>
  )
}

export default connect(null, { deleteLog, setCurrent })(LogItem);
