import { useState, useEffect } from "react"

import Layout from "../layout/Layout"
import Grid from "../components/Grid"
import Card from "../components/Card"

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
    <Layout title="Users">
      <Grid>
        {users.map((user) => {
          return <Card key={user.name} user={user} />
        })}
      </Grid>
    </Layout>
  )
}

export default Users
