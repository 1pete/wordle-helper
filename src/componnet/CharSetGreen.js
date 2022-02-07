import React from 'react'

import { Grid, TextField } from '@mui/material'

const Input = ({ value, setValue }) => {
  const onChange = (e) => {
    const { value } = e.target

    const chars = value
      .split('')
      .map((c) => c.toUpperCase())
      .filter((c) => /[A-Z]/.test(c))

    setValue(chars.length ? chars[chars.length - 1] : '')
  }

  return (
    <Grid item xs={2}>
      <TextField
        color="success"
        value={value}
        onChange={onChange}
        inputProps={{
          maxLength: 2,
          style: {
            paddingLeft: 10,
            paddingRight: 10,
            textAlign: 'center',
            backgroundColor: `rgba(106, 170, 100, ${value ? '0.8' : '0.2'})`,
          },
        }}
      />
    </Grid>
  )
}

const CharSetGreen = ({ chars, setChars }) => {
  const createCallback = (index) => {
    return (e) => {
      const newChars = [...chars]
      newChars[index] = e
      setChars(newChars)
    }
  }

  return (
    <Grid item xs={12}>
      <Grid container spacing={3}>
        <Grid item xs={1} />
        <Input value={chars[0]} setValue={createCallback(0)} />
        <Input value={chars[1]} setValue={createCallback(1)} />
        <Input value={chars[2]} setValue={createCallback(2)} />
        <Input value={chars[3]} setValue={createCallback(3)} />
        <Input value={chars[4]} setValue={createCallback(4)} />
      </Grid>
    </Grid>
  )
}

export default CharSetGreen
