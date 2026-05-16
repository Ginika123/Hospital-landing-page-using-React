import "./Navbar.css";
import { useEffect, useState } from "react";
function Navbar() {

    const [open, setOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false)
    useEffect(() => {
        if(darkMode){
            document.body.classList.add("dark")
        }else{
            document.body.classList.remove("dark")
        }
    }, [darkMode])
    const toggleDarkMode =() => {
        setDarkMode(!darkMode)
    }
    const toggleMenu = () => {
        setOpen(!open);
    }
    return(
        <header>
            <div className="logo">
                <h1>KayHospital</h1>

            </div>

            <div className="hamburger" onClick={toggleMenu}>
☰
            </div>


            

            <nav>
                <ul className={`nav-links ${open ? "active" : ""}`}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Servcies</a></li>
                    <li><a href="#">Our Team</a></li>
                    <li><a className="btn" href="#">Contact Us</a></li>
                    <li><button className="dark-box" onClick={toggleDarkMode}>
  {darkMode ? "☀️ Light" : "🌙 "}
</button></li>
                    

                </ul>
                
            </nav>
        </header>
    )
}
export default Navbar;