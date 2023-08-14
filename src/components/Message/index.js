// Write your code here
import './index.css'

const Message = props => {
  const {isLogged} = props
  const msg = isLogged ? 'Please Login' : 'Welcome User'
  return (
    <div>
      <h1 className="head">{msg}</h1>
    </div>
  )
}
export default Message
