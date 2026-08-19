import { useEffect } from 'react'
import { Contact } from '@/components/Contact'

export default function ContactScreen() {
  useEffect(() => {
    document.title = 'Contact — Ryan Lee'
  }, [])

  return (
    <section
      id="contact"
      className="relative flex min-h-dvh flex-col items-center justify-center"
    >
      <div className="max-w-prose w-full px-6">
        <Contact />
      </div>
    </section>
  )
}
