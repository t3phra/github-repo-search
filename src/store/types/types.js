import * as actionTypes from '../constants/actionTypes'

export type ResponseData = Array<{
  repoId: string,
  repoName: string,
  repoAuthor: string,
  repoStarsAmount: string,
  repoUrl: string,
}>

// State

export type State = {
  repos: ResponseData,
  isLoading: boolean,
  error: string,
}

// Actions

export type SearchRepos = {
  type: typeof actionTypes.SEARCH_REQUEST,
  searchParams: string,
}

export type SearchRequestSent = {
  type: typeof actionTypes.SEARCH_REQUEST_SENT,
}

export type SearchRequestSuccess = {
  type: typeof actionTypes.SEARCH_REQUEST_SUCCESS,
  responseData: ResponseData,
}

export type SearchRequestFail = {
  type: typeof actionTypes.SEARCH_REQUEST_FAIL,
  errorMessage: string,
}

export type Action = SearchRepos | SearchRequestSent | SearchRequestSuccess | SearchRequestFail
