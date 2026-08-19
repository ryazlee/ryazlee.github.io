import { useEffect, useRef } from 'react'
import { Main } from '@/components/Main'
import { Projects } from '@/components/Projects'

export default function HomeScreen() {
  const locked = useRef(false)

  useEffect(() => {
    document.title = 'Ryan Lee'
  }, [])

  useEffect(() => {
    const scrollTo = (id: 'hero' | 'projects') => {
      if (locked.current) return
      locked.current = true
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      window.setTimeout(() => {
        locked.current = false
      }, 900)
    }

    const onWheel = (e: WheelEvent) => {
      if (locked.current) {
        e.preventDefault()
        return
      }

      const projects = document.getElementById('projects')
      if (!projects) return

      const projectsTop = projects.getBoundingClientRect().top
      const scrollingDown = e.deltaY > 8
      const scrollingUp = e.deltaY < -8

      if (scrollingDown && projectsTop > 80) {
        e.preventDefault()
        scrollTo('projects')
        return
      }

      if (scrollingUp && projectsTop > -80 && projectsTop < 80) {
        e.preventDefault()
        scrollTo('hero')
      }
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    return () => window.removeEventListener('wheel', onWheel)
  }, [])

  return (
    <>
      <section
        id="hero"
        className="relative flex min-h-dvh flex-col items-center justify-center"
      >
        <div className="max-w-prose w-full px-6">
          <Main />
        </div>
        <button
          onClick={() =>
            document.getElementById('projects')?.scrollIntoView({
              behavior: 'smooth',
            })
          }
          className="absolute bottom-10 flex flex-col items-center gap-2 text-faint hover:text-muted transition-colors duration-300 cursor-pointer bg-transparent border-none animate-fade-in delay-4"
          aria-label="Scroll to projects"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase font-medium">
            Projects
          </span>
          <svg
            className="w-3.5 h-3.5 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </section>
      <section
        id="projects"
        className="flex min-h-dvh flex-col items-center justify-center"
      >
        <div className="max-w-prose w-full px-6 py-20">
          <Projects />
        </div>
      </section>
    </>
  )
}
