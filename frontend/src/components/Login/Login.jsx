import './style.scss'
import PasswordInput from '../PasswordInput/PasswordInput'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const initialState = {
  email: '',
  password: '',
}

export default function Login() {
  const navigate = useNavigate()
  const [formData, setformData] = useState(initialState)
  const { email, password } = formData
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setformData({ ...formData, [name]: value })
  }

  const loginHandler = async (e) => {
    e.preventDefault()
    if (!email || !password) {
      return toast.error('Tüm alanlar zorunludur!')
    }
    const userData = {
      email,
      password,
    }

    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })

    if (response.ok) {
      navigate('/')
    } else {
      toast.error('Bir Hatadan dolayı işlem gerçekleşemedi')
    }
  }
  return (
    <div id="login">
      <div className="signup-headerbox">
        <h1 className="!font-extrabold text-4xl uppercase">Login</h1>
      </div>
      <form onSubmit={loginHandler} className="h-[400px] !relative">
        <label htmlFor="email">
          <span className="!text-lg ">Email</span>
          <input
            type="text"
            className="textInput !h-[35px] !rounded-md"
            placeholder="email@gmail.com"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="password">
          <span className="!text-lg ">Password</span>
          <PasswordInput
            className="textInput !h-[35px] !rounded-md"
            placeholder="********"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
          <a className="cursor-pointer">Forgot Password?</a>
        </label>
        <input type="submit" className="submitButton" value="Login" />
        <div className="!text-center !flex !justify-center !items-center">
          <a className="!text-white !absolute bottom-[100px]  " href="/signup">
            Hesabın yok mu? Buradan Kayıt Ol
          </a>
        </div>
      </form>
      <a href=""></a>
    </div>
  )
}
