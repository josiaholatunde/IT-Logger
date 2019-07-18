import { GET_LOGS, SET_LOADING, ADD_LOG, LOG_ERRORS, DELETE_LOG, UPDATE_LOG, CLEAR_CURRENT_LOG, SET_CURRENT_LOG, SEARCH_LOGS } from "../actions/types";

const initialState = {
  logs: null,
  error: null,
  current: null,
  loading: false
}


export default (state = initialState,  {type, payload}) => {
  switch (type) {
    case GET_LOGS:
      return {
        ...state,
        logs: payload,
        loading: false
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case ADD_LOG: 
    return {
      ...state,
      logs: [...state.logs, payload],
      loading: false
    }
    case LOG_ERRORS:
      return {
        ...state,
        error: payload
      }
    case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter(({id}) =>  id !== payload),
        loading: false
      }
    case UPDATE_LOG:
      return {
        ...state,
        logs: state.logs.map(log => log.id === payload.id ? payload: log)
      }
    case SET_CURRENT_LOG: 
      return {
        ...state,
        current: payload
      }
    case CLEAR_CURRENT_LOG:
      return {
        ...state,
        current: null
      }
    case SEARCH_LOGS:
      return {
        ...state,
        logs: payload,
        loading: false
      }
    default:
      return state;
  }
}