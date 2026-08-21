import { connectLinks, emailAddress } from '@/config'
import { Link } from './Link'

const body = 'text-[0.95rem] md:text-base leading-relaxed text-muted'

export function Contact() {
  return (
    <div className="space-y-6">
      <p className="text-[1.65rem] md:text-[2rem] font-semibold leading-[1.25] tracking-[-0.025em] animate-fade-up">
        👋 I'd love to hear from you!
      </p>
      <p className={`${body} animate-fade-up delay-1`}>
        Shoot me a note at{' '}
        <Link href={connectLinks.email}>{emailAddress}</Link>. Connecting on{' '}
        <Link href={connectLinks.linkedIn}>LinkedIn</Link> works too, or grab my{' '}
        <Link href={connectLinks.resume}>resume</Link> if you want the paper
        version 🫡.
      </p>
      <p className={`${body} animate-fade-up delay-2`}>
        <Link to="/">back to home</Link>
      </p>
    </div>
  )
}
