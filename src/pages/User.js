import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Layout from "../layout/Layout"
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
        <Layout title="Loading">
          <div>Loading</div>
        </Layout>
      ) : (
        <Layout title={user.name}>
          <img src={user.profile_picture} alt={user.name} />
          <h2>{user.name}</h2>
        </Layout>
      )}
    </>
  )
}

export default User
