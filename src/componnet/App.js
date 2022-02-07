import React, { useState } from 'react'
import { Button, Grid } from '@mui/material'

import CharSet from './CharSet'
import CharSetGreen from './CharSetGreen'
import Result from './Result'

import { filterResult } from '../util'

import rawData from '../data.json'

const App = () => {
  const [grey, setGrey] = useState([])
  const [yellow, setYellow] = useState([])
  const [green, setGreen] = useState(['', '', '', '', ''])
  const [result, setResult] = useState(null)

  const onSearch = () => {
    if (!grey.length && !yellow.length && green.every((w) => !w)) {
      setResult(null)
      return
    }

    const data = filterResult(rawData, grey, yellow, green)

    setResult(data)
  }

  return (
    <Grid container spacing={2} style={{ marginTop: 55 }}>
      <CharSet
        title="Grey"
        chars={grey}
        setChars={setGrey}
        bgColor="rgba(120, 124, 126, 0.2)"
      />
      <CharSet
        title="Yellow"
        chars={yellow}
        setChars={setYellow}
        bgColor="rgba(201, 180, 88, 0.2)"
      />
      <CharSetGreen title="Green" chars={green} setChars={setGreen} />
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
