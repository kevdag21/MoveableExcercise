import React, { PropsWithChildren, SetStateAction, createContext, useState } from 'react'

interface ThemeContext {
  theme : string,
  setTheme : React.Dispatch<SetStateAction<string>>
}

export const  ThemeContext  = createContext<ThemeContext>({
  theme: '',
  setTheme: () => {}
});

export default function ThemeContextHelper({children}: PropsWithChildren) {
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}  
    </ThemeContext.Provider>
  )
}


