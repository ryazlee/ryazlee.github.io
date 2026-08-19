import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

interface ColorModeContextValue {
  isDark: boolean
  toggle: () => void
}

export const ColorModeContext = createContext<ColorModeContextValue>({
  isDark: false,
  toggle: () => {},
})

export function useColorMode() {
  return useContext(ColorModeContext)
}

export function ColorModeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem('darkMode')
      return stored === null ? true : stored === 'true'
    } catch {
      return true
    }
  })

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDark)
    document.body.classList.toggle('light-mode', !isDark)
    localStorage.setItem('darkMode', String(isDark))

    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', isDark ? '#111111' : '#f6f5f2')
  }, [isDark])

  return (
    <ColorModeContext.Provider
      value={{
        isDark,
        toggle: () => setIsDark((prev) => !prev),
      }}
    >
      {children}
    </ColorModeContext.Provider>
  )
}
