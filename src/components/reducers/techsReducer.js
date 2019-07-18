import { GET_TECHS, SET_LOADING, ADD_TECH, DELETE_TECH } from "../actions/types";


const initialState = {
  techs: null,
  loading: false,
  error: null
}

export default (state=initialState, {type, payload}) => {
  switch (type) {
    case GET_TECHS:
      return {
        ...state,
        techs: payload,
        loading: false
      }
      case SET_LOADING:
        return {
          ...state,
          loading: true
        }
    case ADD_TECH:
      console.log('Yo!')
      return {
        ...state,
        techs: [...state.techs, payload],
        loading: false
      }
    case DELETE_TECH:
        return {
          ...state,
          techs: state.techs.filter(({id}) =>  id !== payload),
          loading: false
        }
    default:
      return state;
  }
}