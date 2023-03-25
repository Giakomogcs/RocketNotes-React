import React from 'react'
import ReactDOM from 'react-dom/client'

import { Routes } from './Routes'

import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

import { MyContext } from './myContext'
import GlobalStyle from './styles/global'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider  theme={theme}>
      <GlobalStyle/>
      <MyContext.Provider value={{name: 'Giovani', email: 'giakomogcs@gmail.com'}}>
        <Routes />
      </MyContext.Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
