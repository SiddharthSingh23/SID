import logo from "../../assets/logo_lt.png"
import './Navbar.css'

export default function Navbar() {
    return (
        <nav>
            <div className="nav1">
            <img src={logo} alt="SID.DEV"/>
                <h3>SID</h3>
            </div>
            <div className="nav2">
                <h4>About</h4>
                <h4>Skills</h4>
                <h4>Journey</h4>
                <h4>Contact</h4>
            </div>
        </nav>
    )
}