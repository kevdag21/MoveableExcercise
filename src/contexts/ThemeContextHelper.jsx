import { createContext, useState } from 'react'

export const  ThemeContext  = createContext({
  theme: '',
  setTheme: () => {}
});

// eslint-disable-next-line react/prop-types
export default function ThemeContextHelper({children}) {
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}  
    </ThemeContext.Provider>
  )
}


