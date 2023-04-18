// import './Navbar.css';
import './temp.css';

const Navbar = () => {
    return ( 
        <nav>
            
            <div className="Nav-logo">Cubeseed</div>
            <ul className='Navbar'>
                {/* <li className="Nav-logo">Cubeseed</li> */}
                <li> <a href="#">About  </a></li>
                <li> <a href="#">Features     </a></li>
                <li> <a href="#">Contact Us     </a></li>

                <button className='loginbutton'> <div> Login </div></button>
                <button className='signupbutton'><div> Sign Up</div></button>
            </ul>
        </nav>

     );
}
 
export default Navbar;