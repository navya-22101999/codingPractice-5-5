// Write your code here
import './index.css'

const Login = props => {
  const {isLogin} = props
  return (
    <button type="button" onClick={isLogin}>
      Login
    </button>
  )
}
export default Login
