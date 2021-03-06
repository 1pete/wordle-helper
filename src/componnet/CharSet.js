import { Grid, TextField } from '@mui/material'
import React from 'react'

import { arrayUnique } from '../util'

const CharSet = ({ title, bgColor, chars, setChars }) => {
  const onChange = (e) => {
    const { value } = e.target

    let newChars = arrayUnique(value.toUpperCase().split(''))
      .sort()
      .filter((i) => /[A-Z]/.test(i))

    setChars(newChars)
  }

  return (
    <Grid item xs={12}>
      <TextField
        label={title}
        variant="outlined"
        fullWidth
        value={chars.join('')}
        onChange={onChange}
        inputProps={{ style: { backgroundColor: bgColor } }}
      />
    </Grid>
  )
}

export default CharSet
