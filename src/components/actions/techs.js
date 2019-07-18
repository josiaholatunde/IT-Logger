import { SET_LOADING, GET_TECHS, LOG_ERRORS, ADD_TECH, DELETE_TECH } from "./types";


export const getTechs = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch(`/techs`);
    const data = await res.json();
    dispatch({
      type: GET_TECHS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: LOG_ERRORS,
      payload: error.response.statusText
    })
  }
}

export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}

export const addTech = tech => async dispatch => {
  try {
    setLoading();
    const res = await fetch('/techs', {
      method: 'POST',
      body: JSON.stringify(tech),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    console.log(data);
    dispatch({
      type: ADD_TECH,
      payload: data
    });

  } catch (error) {
    dispatch({
      type: LOG_ERRORS,
      payload: error.response.satusText
    })
  }
}

export const deleteTech = id => async dispatch => {
  try {
    setLoading();
    const res = await fetch(`/techs/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    await res.json();
    dispatch({
      type: DELETE_TECH,
      payload: id
    });
  } catch (error) {
    dispatch({
      type: LOG_ERRORS,
      payload: error.response.data
    })
  }
}