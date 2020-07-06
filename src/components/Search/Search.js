import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { searchRepos } from '../../store/actions/repos'
import Card from '../Card/Card'
import './Search.css'

const Search = () => {
  const [inputState, setInputState] = useState('')
  const dispatch = useDispatch()
  const { repos, isLoading, errorMessage } = useSelector((state) => state)

  useEffect(() => {
    if (inputState) {
      dispatch(searchRepos(inputState))
    }
  }, [inputState, dispatch])

  return (
    <>
      <input
        type="text"
        placeholder="Enter the name of GitHub repository..."
        className="Search"
        onChange={(event) => setInputState(event.target.value)}
        value={inputState}
      />
      <div className="Search-cards">
        {repos.map((repo) => (
          <Card
            key={repo.repoId}
            repoName={repo.repoName}
            repoAuthor={repo.repoAuthor}
            repoStarsAmount={repo.repoStarsAmount}
            repoUrl={repo.repoUrl}
          />
        ))}
      </div>
    </>
  )
}

export default Search
