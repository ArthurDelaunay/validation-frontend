import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="">
      <ul className="flex gap-12 text-m text-gray-700 font-semibold">
        <li className="title-hover">
          <Link to="/">Home</Link>
        </li>
        <li className="title-hover">
          <Link to="/users">Users</Link>
        </li>
        <li className="title-hover">
          <Link to="/users/new-user">New User</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
