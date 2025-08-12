const About = () => {
  return (
    <div className="page about">
      <section className="about-hero">
        <h2>About DroneMetrics</h2>
        <p>Innovative solutions for drone telemetry and analytics</p>
      </section>
      
      <section className="about-content">
        <div className="about-section">
          <h3>Our Mission</h3>
          <p>
            At DroneMetrics, we're dedicated to providing cutting-edge telemetry solutions 
            for drone operators and enthusiasts. Our platform offers real-time monitoring 
            and historical analytics to help you get the most out of your drone flights.
          </p>
        </div>
        
        <div className="about-section">
          <h3>Our Team</h3>
          <p>
            Founded in 2020 by a team of aerospace engineers and data scientists, 
            DroneMetrics combines technical expertise with a passion for drone technology. 
            We're committed to making advanced telemetry accessible to everyone.
          </p>
        </div>
        
        <div className="about-section">
          <h3>Our Technology</h3>
          <p>
            Our platform uses advanced algorithms to process and visualize drone data 
            in real-time. Whether you're a hobbyist or a commercial operator, our 
            tools provide the insights you need for safer, more efficient flights.
          </p>
        </div>
      </section>
    </div>
  )
}

export default About