import { useState, useEffect } from "react"

const NewUser = () => {
  // states
  const [name, setName] = useState("")
  const [city, setCity] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [image, setImage] = useState("")

  // didMount, didUpdate

  // methodes
  const handleNameChange = (e) => {
    setName(e.target.value)
  }
  const handleCityChange = (e) => {
    setCity(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handleImageChange = (e) => {
    setImage(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newUser = {
      name,
      city,
      password,
      email,
      image,
    }
    const request = await fetch("http://localhost:5000/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
    const response = await request.json()
    console.log(response)
  }
  return (
    <main>
      <h1>New User</h1>
      <form action="" onSubmit={handleSubmit} value={name}>
        <div>
          <label htmlFor="">Name : </label>
          <input
            onChange={handleNameChange}
            type="text"
            placeholder="enter your name.."
          />
        </div>
        <div>
          <label htmlFor="">Password : </label>
          <input
            onChange={handlePasswordChange}
            value={password}
            type="password"
          />
        </div>
        <div>
          <label htmlFor="">Email : </label>
          <input
            onChange={handleEmailChange}
            value={email}
            type="text"
            placeholder="enter your email.."
          />
        </div>
        <div>
          <label htmlFor="">City : </label>
          <select onChange={handleCityChange} value={city} id="">
            <option value="">Select a city</option>
            <option value="Tokyo">Tokyo</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Paris">Paris</option>
          </select>
        </div>
        <div>
          <label htmlFor="">Picture : </label>
          <input
            onChange={handleImageChange}
            value={image}
            type="text"
            placeholder="enter your picture for your profile.."
          />
        </div>
        <button type="submit">Add User</button>
      </form>
    </main>
  )
}

export default NewUser
