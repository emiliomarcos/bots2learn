import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav>
      <Link to='/'>Bots2Learn</Link>
      <Link to='/questionizer'>Questionizer</Link>
      <Link to='/summarizer'>Summarizer</Link>
    </nav>
  )
}
