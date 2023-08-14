// Write your code here
import './index.css'

const Logout = props => {
  const {isLogout} = props
  return (
    <button type="button" onClick={isLogout}>
      Logout
    </button>
  )
}
export default Logout
