import { takeLatest } from 'redux-saga/effects'

import * as actionTypes from '../constants/actionTypes'
import { searchReposSaga } from '../sagas/repos'

export function* watchGitHubSearch() {
  yield takeLatest(actionTypes.SEARCH_REPOS, searchReposSaga)
}
