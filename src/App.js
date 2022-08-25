import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Users from "./pages/Users"
import User from "./pages/User"
import NewUser from "./pages/NewUser"
import NotFound from "./pages/NotFound"

import Layout from "./layout/Layout"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:slug" element={<User />} />
        <Route path="/users/new-user" element={<NewUser />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
