import { useState } from 'react'
import './style.scss'
import PasswordInput from '../PasswordInput/PasswordInput'
import { validateEmail } from '../../utils/validateEmail'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

/* 
  Doğum tarihi ile alakalı bir kısım ekledim yaş kontrolü için haberin olsun
 */

const initialState = {
  fullName: '',
  email: '',
  birthDate: '',
  password: '',
  confirmPassword: '',
}

export default function SignUp() {
  const navigate = useNavigate()
  const [formData, setformData] = useState(initialState)
  const { fullName, email, birthDate, password, confirmPassword } = formData

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setformData({ ...formData, [name]: value })
  }

  const registerUser = async (e) => {
    e.preventDefault()

    if (!fullName || !email || !password) {
      return toast.error('All fields are required')
    }
    if (password.length < 6) {
      return toast.error('Passwords must be up to 6 characters')
    }
    if (!validateEmail(email)) {
      return toast.error('Please enter a valid email')
    }

    if (confirmPassword !== password) {
      return toast.error('Passwords not matched')
    }

    const userData = {
      fullName,
      email,
      password,
    }
    const response = await fetch(`http://localhost:5000/api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })

    if (response.ok) {
      navigate('/login')
    } else {
      toast.error('Bir Hatadan dolayı işlem gerçekleşemedi')
    }
  }
  return (
    <div id="signup">
      <div className="signup-headerbox">
        <h3 className="uppercase">Sign Up</h3>
      </div>
      <form onSubmit={registerUser}>
        <label htmlFor="name">
          <span>Name</span>
          <input
            type="text"
            className="textInput !h-[35px] !rounded-md w-full"
            placeholder="Bugy"
            name="fullName"
            value={fullName}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="email">
          <span>Email</span>
          <input
            type="text"
            className="textInput !h-[35px] !rounded-md w-full"
            placeholder="example@email.org"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="birthDate">
          <span>Email</span>
          <input
            type="date"
            className="textInput !h-[35px] !rounded-md w-full"
            placeholder="example@email.org"
            name="birthDate"
            value={birthDate}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="password" class="password">
          <span>Password</span>
          <PasswordInput
            name="password"
            value={password}
            className="passwordInput !h-[35px] !rounded-md"
            placeholder="********"
            onChange={handleInputChange}
          ></PasswordInput>
        </label>
        <label htmlFor="confirmPassword" class="password">
          <span>Confirm Password</span>
          <PasswordInput
            name="confirmPassword"
            className="passwordInput !h-[35px] !rounded-md"
            value={confirmPassword}
            placeholder="********"
            onChange={handleInputChange}
          ></PasswordInput>
        </label>
        <div>
          <a
            href="/login"
            className="text-white text-xs flex justify-center cursor-pointer hover:underline-offset-2 hover:underline"
          >
            Already have an account ?{' '}
          </a>
        </div>
        <input
          type="submit"
          className="submitButton !cursor-pointer !w-full !h-[35px] !rounded-md"
          value="Sign Up"
        />
      </form>
    </div>
  )
}
