import { GET_LOGS, LOG_ERRORS, SET_LOADING, ADD_LOG, DELETE_LOG, UPDATE_LOG, SET_CURRENT_LOG, CLEAR_CURRENT_LOG, SEARCH_LOGS } from "./types";

export const getLogs = () => async dispatch => {
  try {
    setLoading(true);
    const res = await fetch('/logs');
    const data = await res.json();
    dispatch({
      type: GET_LOGS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: LOG_ERRORS,
      payload: error.response.data
    })
  }
}

export const searchLogs = (text) => async dispatch => {
  try {
    setLoading();
    const res = await fetch(`/logs/?q=${text}`);
    const data = await res.json();
    dispatch({
      type: SEARCH_LOGS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: LOG_ERRORS,
      payload: error.response.data
    })
  }
}

export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}

export const setCurrent = log => {
  return {
    type: SET_CURRENT_LOG,
    payload: log
  }
}

export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT_LOG
  }
}

export const addLog = log => async dispatch => {
  try {
    setLoading();
    const res = await fetch('/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    dispatch({
      type: ADD_LOG,
      payload: data
    });

  } catch (error) {
    dispatch({
      type: LOG_ERRORS,
      payload: error.response.data
    })
  }
}

export const updateLog = log => async dispatch => {
  try {
    setLoading();
    const res = await fetch('/logs', {
      method: 'PUT',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    dispatch({
      type: UPDATE_LOG,
      payload: log
    });

  } catch (error) {
    dispatch({
      type: LOG_ERRORS,
      payload: error.response.data
    })
  }
}

export const deleteLog = id => async dispatch => {
  try {
    setLoading();
    const res = await fetch(`/logs/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    await res.json();
    dispatch({
      type: DELETE_LOG,
      payload: id
    });
    setLoading(false);
  } catch (error) {
    dispatch({
      type: LOG_ERRORS,
      payload: error.response.data
    })
  }
}