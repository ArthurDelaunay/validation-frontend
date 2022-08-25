import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Users = () => {
  // states
  const [users, setUsers] = useState([])

  // didMount, didUpdates
  useEffect(() => {
    fetchUsers()
  }, [])

  // methodes
  const fetchUsers = async () => {
    const request = await fetch("http://localhost:5000/users")
    const response = await request.json()
    setUsers(response)
  }

  return (
    <main>
      {users.map((user) => {
        return (
          <Link key={user.name} to={`/users/${user.slug}`}>
            <article>
              <h2>{user.name}</h2>
              <img src={user.profile_picture} alt={user.name}></img>
            </article>
          </Link>
        )
      })}
    </main>
  )
}

export default Users
