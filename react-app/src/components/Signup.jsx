import Header from './Header';
import {Link} from 'react-router-dom';
function Signup() {
  return (
    <div>
      <Header/>
      welcome to signup page
      <br></br>
      USERNAME:
      <input type="text"/>
      <br></br>
      PASSWORD:
      <input type="text"/>
      <br></br>
      <button>Signup</button>
      <Link to="/Loginn">LOGIN</Link>
      
    </div>
  )
}

export default Signup;