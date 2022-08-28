import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="">
      <ul className="flex gap-8 text-m text-gray-700 font-semibold">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/users/new-user">New User</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
