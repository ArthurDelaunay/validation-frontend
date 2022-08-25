import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const User = () => {
  const params = useParams()

  // states
  const [user, setUser] = useState(null)

  // didMount, didUpdate
  useEffect(() => {
    fetchUser()
    // eslint-disable-next-line
  }, [])

  // methodes
  const fetchUser = async () => {
    const request = await fetch(`http://localhost:5000/users/${params.slug}`)
    const response = await request.json()
    setUser(response)
  }
  return (
    <>
      {!user ? (
        <div>Loading</div>
      ) : (
        <main>
          <h1>{user.name}</h1>
          <img src={user.profile_picture} alt={user.name} />
        </main>
      )}
    </>
  )
}

export default User
