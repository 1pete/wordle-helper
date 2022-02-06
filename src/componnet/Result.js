import React, { useMemo } from 'react'
import { Typography } from '@mui/material'

const Result = ({ items }) => {
  const topResult = useMemo(() => {
    if (!items) return []

    return items.slice(0, 200)
  }, [items])

  if (!items) {
    return null
  }

  return (
    <>
      <Typography>Results: {items.length}</Typography>
      {items.length > 200 ? <Typography>Top 200 Results</Typography> : null}
      {topResult.join(', ')}
    </>
  )
}

export default Result
