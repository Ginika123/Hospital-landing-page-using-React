import "./Footer.css";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn
} from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                {/* COLUMN 1 */}
                <div className="footer-box">
                    <h2>MedCare</h2>
                    <p>
                        We provide trusted healthcare services with
                        experienced doctors and modern facilities.
                    </p>

                    <div className="social-icons">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaLinkedinIn /></a>
                    </div>
                </div>

                {/* COLUMN 2 */}
                <div className="footer-box">
                    <h3>Quick Links</h3>

                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Doctors</a>
                    <a href="#">Contact</a>
                </div>

                {/* COLUMN 3 */}
                <div className="footer-box">
                    <h3>Services</h3>

                    <a href="#">Cardiology</a>
                    <a href="#">Dental Care</a>
                    <a href="#">Neurology</a>
                    <a href="#">Pediatrics</a>
                    <a href="#">Emergency Care</a>
                </div>

                {/* COLUMN 4 */}
                <div className="footer-box">
                    <h3>Contact Info</h3>

                    <p>Email: medcare@gmail.com</p>
                    <p>Phone: +234 901 234 5678</p>
                    <p>Location: Lagos, Nigeria</p>
                </div>

            </div>

            {/* BOTTOM */}
            <div className="footer-bottom">
                <p>
                    © 2026 MedCare Hospital. All Rights Reserved.
                </p>
            </div>

        </footer>
    );
}

export default Footer;