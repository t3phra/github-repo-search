import { takeLatest } from 'redux-saga/effects'

import * as actionTypes from '../constants/actionTypes'
import searchReposSaga from './repos'

export default function* watchGitHubSearch() {
  yield takeLatest(actionTypes.SEARCH_REPOS, searchReposSaga)
}
