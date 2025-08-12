import { useState, useEffect } from 'react'

const Dashboard = () => {
  const [gyroData, setGyroData] = useState(null)
  const [isConnected, setIsConnected] = useState(false)
  const [lastUpdate, setLastUpdate] = useState(null)
  const [historyData, setHistoryData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Mock data - replace with actual API call
        const mockData = {
          xAxis: (Math.random() * 100).toFixed(2),
          yAxis: (Math.random() * 100).toFixed(2),
          zAxis: (Math.random() * 100).toFixed(2),
          temperature: (Math.random() * 50 + 20).toFixed(1),
          pressure: (Math.random() * 1000 + 900).toFixed(2),
          altitude: (Math.random() * 100).toFixed(2),
          timestamp: new Date().toISOString()
        }
        
        setGyroData(mockData)
        setIsConnected(true)
        setLastUpdate(new Date().toLocaleTimeString())
        
        // Update history
        setHistoryData(prev => {
          const newData = [...prev, {...mockData, timestamp: new Date().toLocaleTimeString()}]
          return newData.length > 20 ? newData.slice(-20) : newData
        })
      } catch (error) {
        console.error('Error fetching data:', error)
        setIsConnected(false)
      }
    }

    fetchData()
    const intervalId = setInterval(fetchData, 2000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="page dashboard">
      <div className="dashboard-header">
        <h2>Drone Telemetry Dashboard</h2>
        <div className="connection-status">
          <span className={`status-indicator ${isConnected ? 'connected' : 'disconnected'}`}></span>
          {isConnected ? 'Connected' : 'Disconnected'}
          {lastUpdate && <span className="last-update">Last update: {lastUpdate}</span>}
        </div>
      </div>
      
      <div className="dashboard-grid">
        {/* X-Axis Card */}
        <div className="dashboard-card">
          <h3>X-Axis Pressure</h3>
          <div className="card-value">
            {gyroData ? gyroData.xAxis : '--'} <span>hPa</span>
          </div>
          <div className="gauge">
            <div className="gauge-fill" style={{ width: `${gyroData ? gyroData.xAxis : 0}%` }}></div>
          </div>
        </div>
        
        {/* Y-Axis Card */}
        <div className="dashboard-card">
          <h3>Y-Axis Pressure</h3>
          <div className="card-value">
            {gyroData ? gyroData.yAxis : '--'} <span>hPa</span>
          </div>
          <div className="gauge">
            <div className="gauge-fill" style={{ width: `${gyroData ? gyroData.yAxis : 0}%` }}></div>
          </div>
        </div>
        
        {/* Z-Axis Card */}
        <div className="dashboard-card">
          <h3>Z-Axis Pressure</h3>
          <div className="card-value">
            {gyroData ? gyroData.zAxis : '--'} <span>hPa</span>
          </div>
          <div className="gauge">
            <div className="gauge-fill" style={{ width: `${gyroData ? gyroData.zAxis : 0}%` }}></div>
          </div>
        </div>
        
        {/* Temperature Card */}
        <div className="dashboard-card">
          <h3>Temperature</h3>
          <div className="card-value">
            {gyroData ? gyroData.temperature : '--'} <span>°C</span>
          </div>
          <div className="temp-indicator">
            <div className="temp-bar" style={{ width: `${gyroData ? (gyroData.temperature / 70 * 100) : 0}%` }}></div>
          </div>
        </div>
        
        {/* Altitude Card */}
        <div className="dashboard-card">
          <h3>Altitude</h3>
          <div className="card-value">
            {gyroData ? gyroData.altitude : '--'} <span>m</span>
          </div>
          <div className="altitude-chart">
            {historyData.map((data, i) => (
              <div 
                key={i} 
                className="altitude-bar" 
                style={{ height: `${data.altitude}%` }}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Data Table */}
        <div className="dashboard-table">
          <h3>Recent Readings</h3>
          <table>
            <thead>
              <tr>
                <th>Time</th>
                <th>X (hPa)</th>
                <th>Y (hPa)</th>
                <th>Z (hPa)</th>
                <th>Temp (°C)</th>
                <th>Alt (m)</th>
              </tr>
            </thead>
            <tbody>
              {[...historyData].reverse().map((data, i) => (
                <tr key={i}>
                  <td>{data.timestamp}</td>
                  <td>{data.xAxis}</td>
                  <td>{data.yAxis}</td>
                  <td>{data.zAxis}</td>
                  <td>{data.temperature}</td>
                  <td>{data.altitude}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard