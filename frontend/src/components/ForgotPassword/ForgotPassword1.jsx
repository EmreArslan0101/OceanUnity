import './style.scss'

export default function ForgotPassword1() {
  
  return (
    <div id="forgot-password">
      <form action='/forgotPassword/code'>
        <label htmlFor="email">
          <span>Write your account's email here</span>
          <input
            type="text"
            className="textInput !h-[35px] !rounded-md w-full"
            placeholder="example@email.org"
            name="email"
          />
        </label>
        <input
          type="submit"
          className="submitButton !cursor-pointer !w-full !h-[35px] !rounded-md"
          value="Send"
        />
      </form>
    </div>
  )
}
