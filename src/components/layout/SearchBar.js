import React, { useRef } from 'react'
import { connect } from 'react-redux';
import { searchLogs } from '../actions/logs';
const SearchBar = ({searchLogs}) => {
  const text = useRef('');
  return (
    <nav style={{marginBottom: '3rem'}} className='blue'>
    <div className="nav-wrapper">
      <form>
        <div className="input-field">
          <input id="search" type="search" ref={text} onChange={() => searchLogs(text.current.value)} />
          <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
          <i className="material-icons">close</i>
        </div>
      </form>
    </div>
  </nav>
  )
}

export default connect(null, { searchLogs})(SearchBar);
