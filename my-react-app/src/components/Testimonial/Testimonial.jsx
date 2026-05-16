import "./Testimonial.css";
import { useState } from "react";

function Testimonial() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    department: "",
    message: "",
  });

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // HANDLE FORM SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Appointment Booked Successfully!");

    console.log(formData);

    // CLEAR FORM AFTER SUBMIT
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      department: "",
      message: "",
    });
  };

  return (
    <section className="tc-section">
      {/* LEFT SIDE */}
      <div className="left">
        <h2>Testimonial</h2>

        <div className="testimonial-card">
          <img
            src="/images/testimonial-3.jpg"
            alt="John Doe"
            className="testimonial-img"
          />
          <p>"Great hospital and caring doctors."</p>
          <h4>- John Doe</h4>
        </div>

        <div className="testimonial-card">
          <img
            src="/images/testimonial-2.jpg"
            alt="Sarah Lee"
            className="testimonial-img"
          />
          <p>"Very clean environment and fast service."</p>
          <h4>- Sarah Lee</h4>
        </div>

        <div className="testimonial-card">
          <img
            src="/images/testimonial-1.jpg"
            alt="Mary Johnson"
            className="testimonial-img"
          />
          <p>"Excellent care and friendly staff."</p>
          <h4>- Mary Johnson</h4>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="right">
        <h2>Book Appointment</h2>

        <form className="booking-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />

          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
          >
            <option value="">Select Department</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Dental">Dental</option>
            <option value="Neurology">Neurology</option>
            <option value="Pediatrics">Pediatrics</option>
          </select>

          <textarea
            name="message"
            placeholder="Additional Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit">Book Appointment</button>
        </form>
      </div>
    </section>
  );
}

export default Testimonial;
