import React from 'react'
import { deleteTech } from '../actions/techs';
import {connect} from 'react-redux';
const TechItem = ({tech: { id, firstName, lastName}, deleteTech}) => {
  return (
    <li className='collection-item'>
      <div>
        {firstName} {lastName}
        <a href="#!" className="secondary-content" onClick={() => deleteTech(id)}>
          <i className="material-icons">delete</i>
        </a>
      </div>
    </li>
  )
}

export default connect(null, { deleteTech })(TechItem)
