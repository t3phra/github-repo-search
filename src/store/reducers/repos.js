import * as actionTypes from '../constants/actionTypes'

const initialState = {
  repos: [],
  isLoading: false,
  error: '',
}

const repos = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_REQUEST_SENT:
      return { ...state, isLoading: true, error: '' }
    case actionTypes.SEARCH_REQUEST_SUCCESS:
      return {
        ...state,
        repos: action.responseData,
        isLoading: false,
        error: '',
      }
    case actionTypes.SEARCH_REQUEST_FAIL:
      return { ...state, isLoading: false, error: action.errorMessage }
    default:
      return state
  }
}

export default repos
