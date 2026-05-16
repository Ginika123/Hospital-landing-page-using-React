import "./Services.css";

function Services() {
    return (
        <section className="services">

            <h2>Our Services</h2>

            <div className="service-grid">

                <div className="card">
                    <img src="/images/blog-2.jpg" alt="Checkup" />
                    <h3 className="lab">General Checkup</h3>
                </div>

                <div className="card">
                    <img src="/images/price-4.jpg" alt="Emergency" />
                    <h3 className="lab">Emergency Care</h3>
                </div>

                <div className="card">
                    <img src="/images/about.jpg" alt="Surgery" />
                    <h3 className="lab">Surgery</h3>
                </div>

                <div className="card">
                    <img src="/images/blog-1.jpg" alt="Dental" />
                    <h3 className="lab">Dental Care</h3>
                </div>

                <div className="card">
                    <img src="/images/about.jpg" alt="Lab" />
                    <h3 className="lab">Laboratory</h3>
                </div>

                <div className="card">
                    <img src="/images/blog-2.jpg" alt="Pharmacy" />
                    <h3 className="lab">Pharmacy</h3>
                </div>

            </div>

        </section>
    );
}

export default Services;