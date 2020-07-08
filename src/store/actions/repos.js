// @flow
import * as actionTypes from '../constants/actionTypes'
import type {
  ResponseData,
  SearchRepos,
  SearchRequestSent,
  SearchRequestSuccess,
  SearchRequestFail,
} from '../types/types'

export const searchRepos = (searchParam: string): SearchRepos => ({
  type: actionTypes.SEARCH_REPOS,
  searchParam,
})

export const searchRequestSent = (): SearchRequestSent => ({
  type: actionTypes.SEARCH_REQUEST_SENT,
})

export const searchRequestSuccess = (responseData: ResponseData): SearchRequestSuccess => ({
  type: actionTypes.SEARCH_REQUEST_SUCCESS,
  responseData,
})

export const searchRequestFail = (errorMessage: string): SearchRequestFail => ({
  type: actionTypes.SEARCH_REQUEST_FAIL,
  errorMessage,
})
