import React, { useState } from 'react'
import { Button, Grid } from '@mui/material'

import CharSet from './CharSet'
import Result from './Result'

import { filterResult } from '../util'

import list from '../list.json'

const wordList = list.map((w) => w.toUpperCase())

const App = () => {
  const [gray, setGray] = useState([])
  const [yellow, setYellow] = useState([])
  const [green, setGreen] = useState([])
  const [result, setResult] = useState(null)

  const onSearch = () => {
    if (!gray.length && !yellow.length && !green.length) {
      setResult(null)
      return
    }

    const data = filterResult(wordList, gray, [...yellow, ...green])

    setResult(data)
  }

  return (
    <Grid container spacing={2} style={{ marginTop: 55 }}>
      <CharSet title="Gray" chars={gray} setChars={setGray} />
      <CharSet title="Yellow" chars={yellow} setChars={setYellow} />
      <CharSet title="Green" chars={green} setChars={setGreen} />
      <Grid item>
        <Button variant="contained" onClick={onSearch}>
          Search
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Result items={result} />
      </Grid>
    </Grid>
  )
}

export default App
