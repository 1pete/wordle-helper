import React from 'react'
import { render } from 'react-dom'

import { AppBar, Toolbar, Typography } from '@mui/material'

import App from './componnet/App'

const Page = () => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            Wordle Helper
          </Typography>
        </Toolbar>
      </AppBar>
      <App />
    </>
  )
}

render(<Page />, document.getElementById('app-root'))
