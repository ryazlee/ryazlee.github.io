import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

type Theme = 'light' | 'dark'

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

const THEME_KEY = 'ryazlee-theme'

function loadTheme(): Theme {
  try {
    const saved = localStorage.getItem(THEME_KEY)
    if (saved === 'dark' || saved === 'light') return saved

    const legacy = localStorage.getItem('darkMode')
    if (legacy === 'true') return 'dark'
    if (legacy === 'false') return 'light'
  } catch {
    // ignore
  }

  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  }

  return 'light'
}

function applyTheme(theme: Theme): void {
  document.documentElement.classList.toggle('theme-dark', theme === 'dark')
  document.body.classList.toggle('dark-mode', theme === 'dark')
  document.body.classList.toggle('light-mode', theme !== 'dark')

  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) {
    meta.setAttribute('content', theme === 'dark' ? '#09090b' : '#fafafa')
  }
}

export function ColorModeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => loadTheme())

  useEffect(() => {
    applyTheme(theme)
    localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  return (
    <ColorModeContext.Provider
      value={{
        isDark: theme === 'dark',
        toggle: () => setTheme((current) => (current === 'dark' ? 'light' : 'dark')),
      }}
    >
      {children}
    </ColorModeContext.Provider>
  )
}
