import { Link } from "react-router-dom"

const Card = ({ user }) => {
  return (
    <Link key={user.name} to={`/users/${user.slug}`}>
      <article>
        <img src={user.profile_picture} alt={user.name}></img>
        <h2>{user.name}</h2>
      </article>
    </Link>
  )
}

export default Card
