// Write your code here
import {Component} from 'react'

import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

import './index.css'

class Home extends Component {
  state = {
    isLogged: true,
  }

  onButton = () => {
    this.setState(prev => ({
      isLogged: !prev.isLogged,
    }))
  }

  render() {
    const {isLogged} = this.state
    return (
      <div className="main-container">
        <div className="card-container">
          <Message isLogged={isLogged} />
          {isLogged ? (
            <Login isLogin={this.onButton} />
          ) : (
            <Logout isLogout={this.onButton} />
          )}
        </div>
      </div>
    )
  }
}
export default Home
