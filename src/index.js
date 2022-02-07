import React from 'react'
import { render } from 'react-dom'

import { AppBar, Container, Toolbar, Typography } from '@mui/material'

import App from './componnet/App'

const Page = () => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <Container fixed maxWidth="sm">
            <Typography variant="h6" color="inherit" component="div">
              Wordle Helper
            </Typography>
          </Container>
        </Toolbar>
      </AppBar>

      <Container fixed maxWidth="sm">
        <App />
      </Container>
    </>
  )
}

render(<Page />, document.getElementById('app-root'))
