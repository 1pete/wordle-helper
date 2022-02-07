import React from 'react'
import { Typography } from '@mui/material'

const LIMIT = 400

const Result = ({ items }) => {
  if (!items) {
    return null
  }

  const numberOfResult = items.reduce((acc, set) => acc + set.length, 0)

  let limit = LIMIT

  return (
    <>
      <Typography>Results: {numberOfResult}</Typography>
      {numberOfResult > LIMIT ? (
        <Typography>Top {LIMIT} Results</Typography>
      ) : null}
      {items.map((set, i) => {
        const list = set.slice(0, limit)
        if (list.length === 0) return null

        limit -= list.length

        return (
          <Typography
            key={i}
            style={{
              padding: 10,
              marginBottom: 10,
              border: '1px solid lightgrey',
              borderRadius: 10,
            }}
          >
            {list.join(', ')}
          </Typography>
        )
      })}
    </>
  )
}

export default Result
