import Header from './Header';
import {Link} from 'react-router-dom';
function Loginn() {
  return (
    <div>
      <Header/>
      welcome to login page
      <br></br>
      USERNAME:
      <input type="text"/>
      <br></br>
      PASSWORD:
      <input type="text"/>
      <br></br>
      <button>LOGIN</button>
      <Link to="/signup">SIGNUP</Link>
      
    </div>
  )
}

export default Loginn;