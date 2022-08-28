import { useState } from "react"
import Input from "./Input"
import Select from "./Select"
import Button from "./Button"

const Form = () => {
  const selectOptions = [
    { value: "", text: "Select a city" },
    { value: "Tokyo", text: "Tokyo" },
    { value: "Paris", text: "Paris" },
    { value: "Los Angeles", text: "Los Angeles" },
  ]

  // states
  const [name, setName] = useState("")
  const [city, setCity] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [image, setImage] = useState("")
  const [errors, setErrors] = useState([])

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
    // console.log(response)
    // console.log(request.status)
    if (request.status === 400) {
      setErrors(response)
    } else {
      setCity("")
      setEmail("")
      setImage("")
      setPassword("")
      setName("")
      setErrors([])
    }
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <br />
      <Input
        label="Name : "
        handleChange={handleNameChange}
        value={name}
        type="text"
        placeholder="enter your name.."
        error={errors.find((error) => {
          return error.param === "name"
        })}
      />

      <Input
        label="Password : "
        handleChange={handlePasswordChange}
        value={password}
        type="password"
        error={errors.find((error) => {
          return error.param === "password"
        })}
      />

      <Input
        label="Email : "
        handleChange={handleEmailChange}
        value={email}
        type="text"
        placeholder="enter your email.."
        error={errors.find((error) => {
          return error.param === "email"
        })}
      />

      <Select
        handleChange={handleCityChange}
        value={city}
        options={selectOptions}
        error={errors.find((error) => {
          return error.param === "city"
        })}
      />

      <Input
        label="Picture : "
        handleChange={handleImageChange}
        value={image}
        type="text"
        placeholder="enter your picture for your profile.."
      />

      <Button type="submit" text="Submit User" />
    </form>
  )
}

export default Form
