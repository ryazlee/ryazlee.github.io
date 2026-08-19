import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Frame from '@/components/layout/Frame'
import Header from '@/components/layout/Header'
import ContactScreen from '@/components/screens/ContactScreen'
import HomeScreen from '@/components/screens/HomeScreen'
import { ColorModeProvider } from '@/context/ColorModeContext'

function getRouterBasename(): string {
  const base = import.meta.env.BASE_URL
  return base.endsWith('/') ? base.slice(0, -1) : base
}

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 1000 * 60 * 10, retry: 1 } },
})

function Shell() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse 90% 55% at 50% -15%, var(--bg-accent), transparent 65%),
            radial-gradient(ellipse 50% 45% at 100% 100%, var(--primary-soft), transparent 50%),
            radial-gradient(ellipse 40% 35% at 0% 80%, var(--primary-soft), transparent 45%),
            var(--bg)
          `,
        }}
      />
      <Frame />
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
      </Routes>
    </>
  )
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ColorModeProvider>
        <BrowserRouter basename={getRouterBasename() || undefined}>
          <Shell />
        </BrowserRouter>
      </ColorModeProvider>
    </QueryClientProvider>
  )
}
