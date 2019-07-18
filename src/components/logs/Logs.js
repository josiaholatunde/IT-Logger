import React, {  useEffect } from 'react'
import LogItem from './LogItem';
import PreLoader from '../layout/PreLoader';
import { getLogs } from '../actions/logs';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const Logs = ({logs: {loading, logs }, getLogs}) => {

  useEffect(() => {
    getLogs();
    //eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <PreLoader />
  }
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
     {!loading && logs.length === 0 ? 
      (<p className="center">No Logs to show</p>): (
       logs.map(log => (<LogItem log={log} key={log.id} />))
     )}
    </ul>
  )
}

Logs.propTypes = {
  logs: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  logs: state.log
})

export default connect(mapStateToProps, { getLogs })(Logs);
