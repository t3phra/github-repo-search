import { put, delay } from 'redux-saga/effects'
import axios from 'axios'

import * as actions from '../actions/repos'

export default function* searchReposSaga(action) {
  yield delay(300)
  yield put(actions.searchRequestSent())
  try {
    const response = yield axios.get(
      `https://api.github.com/search/repositories?=${action.searchParam}`
    )
    const repos = response.data.items.map((repo) => ({
      repoId: repo.id,
      repoName: repo.full_name,
      repoAuthor: repo.owner.login,
      repoStarsAmount: repo.stargazers_count,
      repoUrl: repo.html_url,
    }))
    yield put(actions.searchRequestSuccess(repos))
  } catch (error) {
    yield put(actions.searchRequestFail(error.message))
  }
}
