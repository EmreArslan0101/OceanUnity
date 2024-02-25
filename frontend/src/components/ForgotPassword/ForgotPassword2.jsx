import './style.scss'

export default function ForgotPassword2() {
  
  return (
    <div id="forgot-password">
      <form action='/forgotPassword/newPassword'>
        <label htmlFor="code">
          <span>Write the code that provided to you with email</span>
          <input
            type="text"
            className="textInput !h-[35px] !rounded-md w-full"
            placeholder="Code here..."
            name="code"
          />
        </label>
        <input
          type="submit"
          className="submitButton !cursor-pointer !w-full !h-[35px] !rounded-md"
          value="Check"
        />
      </form>
    </div>
  )
}
