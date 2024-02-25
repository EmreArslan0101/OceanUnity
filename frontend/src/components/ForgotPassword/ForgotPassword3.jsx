import './style.scss'
import PasswordInput from '../PasswordInput/PasswordInput'

export default function ForgotPassword3() {
  
  return (
    <div id="forgot-password">
      <form action="/">
      <label htmlFor="password" class="password">
          <span>New Password</span>
          <PasswordInput
            name="password"
            className="passwordInput !h-[35px] !rounded-md"
            placeholder="********"
          ></PasswordInput>
        </label>
        <label htmlFor="confirmPassword" class="password">
          <span>Confirm New Password</span>
          <PasswordInput
            name="confirmPassword"
            className="passwordInput !h-[35px] !rounded-md"
            placeholder="********"
          ></PasswordInput>
        </label>
        <input
          type="submit"
          className="submitButton !cursor-pointer !w-full !h-[35px] !rounded-md"
          value="Change Password"
        />
      </form>
    </div>
  )
}
