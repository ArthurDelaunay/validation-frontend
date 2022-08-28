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
    if (response.profile_picture === "") {
      response.profile_picture =
        "https://st.depositphotos.com/1028979/3864/i/450/depositphotos_38643469-stock-photo-young-woman-holding-interrogation-symbol.jpg"
    }
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
          <article className="flex flex-wrap pt-10 h-[600px] gap-8 justify-center items-center">
            <img
              src={user.profile_picture}
              alt={user.name}
              className="w-2/3 rounded-tl-[46px] rounded-br-[46px]"
            />
            <div className="flex flex-col justify-center gap-8 border-2 p-5 rounded-tr-[46px] rounded-bl-[46px] ">
              <h2 className="text-lg font-medium">Name : {user.name}</h2>
              <p className="text-lg ">Password : {user.password}</p>
              <p className="text-lg ">Email : {user.email}</p>
              <p className="text-lg ">City : {user.city}</p>
            </div>
          </article>
        </Layout>
      )}
    </>
  )
}

export default User
