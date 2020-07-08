// @flow
import React from 'react'

import './Card.css'

type Props = {
  repoName: string,
  repoAuthor: string,
  repoStarsAmount: string,
  repoUrl: string,
}

const Card = (props: Props) => {
  const { repoName, repoAuthor, repoStarsAmount, repoUrl } = props

  return (
    <a href={repoUrl} className="Card">
      <h3 className="Card-title">{repoName}</h3>
      <hr />
      <p className="Card-author">Author: {repoAuthor}</p>
      <p>Stars amount: {repoStarsAmount}</p>
    </a>
  )
}

export default Card
