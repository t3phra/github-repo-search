import * as actionTypes from '../constants/actionTypes'

export const searchRepos = (searchParam) => ({
  type: actionTypes.SEARCH_REPOS,
  searchParam,
})

export const searchRequestSent = () => ({
  type: actionTypes.SEARCH_REQUEST_SENT,
})

export const searchRequestSuccess = (responseData) => ({
  type: actionTypes.SEARCH_REQUEST_SUCCESS,
  responseData,
})

export const searchRequestFail = (errorMessage) => ({
  type: actionTypes.SEARCH_REQUEST_FAIL,
  errorMessage,
})
