import React from 'react'
import {LandingPage} from './page/LandingPage'
import {AppTheme} from './theme/AppTheme'

import "./App.css"


export const LandingApp = () => {
  return (
    <>
      <AppTheme>
      <LandingPage/>
      </AppTheme>
    </>
  )
}

