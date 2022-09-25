import React from 'react'
import {LandingPage} from './page/LandingPage'
import {AppTheme} from './theme/AppTheme'

import "./App.css"
import { NavBar } from './Components/NavBar'
import { Footer } from './Components/Footer'


export const LandingApp = () => {
  return (
    <>
      <AppTheme>
      <NavBar />
      <LandingPage/>
      <Footer />
      </AppTheme>
    </>
  )
}

