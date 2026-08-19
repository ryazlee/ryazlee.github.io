import { connectLinks, emailAddress } from '@/config'
import { Link } from './Link'

const body = 'text-[0.95rem] md:text-base leading-relaxed text-muted'

export function Contact() {
  return (
    <div className="space-y-6">
      <p className="text-[1.65rem] md:text-[2rem] font-semibold leading-[1.25] tracking-[-0.025em] animate-fade-up">
        Say hello.
      </p>
      <p className={`${body} animate-fade-up delay-1`}>
        Email is the easiest way to reach me, or you can find me on LinkedIn.
      </p>
      <p className={`${body} animate-fade-up delay-2`}>
        <Link href={connectLinks.email}>{emailAddress}</Link>
        <br />
        <Link href={connectLinks.linkedIn}>LinkedIn</Link>
      </p>
    </div>
  )
}
