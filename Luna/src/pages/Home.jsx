import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="page home">
      <section className="hero">
        <div className="hero-content">
          <h1>Drone Telemetry Dashboard</h1>
          <p>Real-time monitoring and analytics for your drone fleet</p>
          <Link to="/dashboard" className="btn-primary">View Dashboard</Link>
        </div>
      </section>
      
      <section className="features">
        <div className="feature-card">
          <h3>Real-time Data</h3>
          <p>Monitor gyroscope, pressure, and altitude data in real-time</p>
        </div>
        <div className="feature-card">
          <h3>Historical Analytics</h3>
          <p>Track performance trends over time</p>
        </div>
        <div className="feature-card">
          <h3>Alerts & Notifications</h3>
          <p>Get notified about critical changes</p>
        </div>
      </section>
    </div>
  )
}

export default Home