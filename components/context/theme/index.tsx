import React, { createContext, useContext, useState } from 'react'

import { ContextProps, iTheme } from './type'

const defaultValue: iTheme = {
  colors: {
    default: '#fff',
    opacity: 'rgba(0,0,0,.8)',
    main: 'rgb(234, 29, 34)'
  },
  padding: {
    default: '2rem'
  }
}


const ThemeContextUI = createContext<ContextProps<iTheme>>({
  theme: defaultValue,
  defaultValue
})

export const ThemeProviderUI = ({ children }: any) => {

  const [ theme, setTheme ] = useState<iTheme>(defaultValue)

  return (
    <ThemeContextUI.Provider value={{
      theme,
      setTheme,
      defaultValue
      }}>
      { children }
    </ThemeContextUI.Provider>
  )
}

export const UseTheme = () =>{
    const context = useContext(ThemeContextUI)

    if(!context) throw new Error('UseTheme munst be used within ThemeProvider.')

    const { theme, setTheme, defaultValue } = context

    return { theme, setTheme, defaultValue }

}
