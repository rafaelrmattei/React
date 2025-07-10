import { Welcome } from '../welcome/welcome'
import type { Route } from './+types/home'

export function meta(_: Route.MetaArgs) {
  return [
    { title: 'A.I. Task Manager' },
    { name: 'description', content: 'Welcome to A.I. Task Manager!' },
  ]
}

export default function Home() {
  return <Welcome />
}
