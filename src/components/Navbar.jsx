import { Link } from 'react-router-dom'
import "./global.css"

export default function Navbar() {
  return (
    <div>
      <header>
        <h1 className='title'>7k Films</h1>
        <nav className='nav-container'>
          <Link to="/all-films"><button>All Films</button></Link>
        </nav>
      </header>
    </div>
  )
}