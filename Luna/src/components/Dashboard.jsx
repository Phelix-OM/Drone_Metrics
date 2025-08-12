import { useEffect, useRef } from 'react'
import * as d3 from 'd3'

const Dashboard = ({ gyroData, isConnected, lastUpdate }) => {
  const chartRef = useRef(null)
  const historyData = useRef([])
  
  // Update history data when new data arrives
  useEffect(() => {
    if (gyroData) {
      if (historyData.current.length >= 20) {
        historyData.current.shift()
      }
      historyData.current.push({
        ...gyroData,
        timestamp: new Date(gyroData.timestamp).toLocaleTimeString()
      })
      
      // Update chart
      updateChart()
    }
  }, [gyroData])

  // Initialize chart
  useEffect(() => {
    if (chartRef.current) {
      initChart()
    }
  }, [])

  const initChart = () => {
    const margin = { top: 20, right: 30, bottom: 30, left: 40 }
    const width = chartRef.current.clientWidth - margin.left - margin.right
    const height = 200 - margin.top - margin.bottom

    const svg = d3.select(chartRef.current)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`)

    // Add scales and axes here
    // This is a placeholder - you'll need to implement based on your data
  }

  const updateChart = () => {
    // Implement chart updates based on historyData
    // This would use d3.js to update the visualization
  }

  return (
    <div className="dashboard-container">
      <header className="header">
        <div className="logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
         Neuro Drone 
        </div>
        <div className="status">
          <div className={`status-indicator ${isConnected ? '' : 'disconnected'}`}></div>
          {isConnected ? 'Connected' : 'Disconnected'}
          {lastUpdate && <span className="text-muted ml-2">Last update: {lastUpdate}</span>}
        </div>
      </header>

      <main className="dashboard">
        {/* X-Axis Pressure */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">X-Axis Pressure</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </div>
          <div className="card-value">
            {gyroData ? gyroData.xAxis : '--'}
            <span className="card-unit">hPa</span>
          </div>
          <div className="gauge-container">
            {/* Gauge visualization would go here */}
            <div className="gauge" style={{ 
              background: `conic-gradient(
                #ff0000 0%, 
                #ff5e00 20%, 
                #ffbb00 40%, 
                #d4ff00 60%, 
                #73ff00 80%, 
                #00ff22 100%
              )`,
              borderRadius: '50%',
              transform: `rotate(${gyroData ? (gyroData.xAxis / 100 * 180 - 90) : 0}deg)`
            }}></div>
          </div>
        </div>

        {/* Y-Axis Pressure */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Y-Axis Pressure</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </div>
          <div className="card-value">
            {gyroData ? gyroData.yAxis : '--'}
            <span className="card-unit">hPa</span>
          </div>
          <div className="gauge-container">
            {/* Gauge visualization would go here */}
            <div className="gauge" style={{ 
              background: `conic-gradient(
                #ff0000 0%, 
                #ff5e00 20%, 
                #ffbb00 40%, 
                #d4ff00 60%, 
                #73ff00 80%, 
                #00ff22 100%
              )`,
              borderRadius: '50%',
              transform: `rotate(${gyroData ? (gyroData.yAxis / 100 * 180 - 90) : 0}deg)`
            }}></div>
          </div>
        </div>

        {/* Z-Axis Pressure */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Z-Axis Pressure</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </div>
          <div className="card-value">
            {gyroData ? gyroData.zAxis : '--'}
            <span className="card-unit">hPa</span>
          </div>
          <div className="gauge-container">
            {/* Gauge visualization would go here */}
            <div className="gauge" style={{ 
              background: `conic-gradient(
                #ff0000 0%, 
                #ff5e00 20%, 
                #ffbb00 40%, 
                #d4ff00 60%, 
                #73ff00 80%, 
                #00ff22 100%
              )`,
              borderRadius: '50%',
              transform: `rotate(${gyroData ? (gyroData.zAxis / 100 * 180 - 90) : 0}deg)`
            }}></div>
          </div>
        </div>

        {/* Temperature */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Temperature</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>
            </svg>
          </div>
          <div className="card-value">
            {gyroData ? gyroData.temperature : '--'}
            <span className="card-unit">°C</span>
          </div>
          <div className="mt-2">
            <div className="flex-center">
              <div style={{
                width: '100%',
                height: '10px',
                background: `linear-gradient(to right, #3a86ff, #ff006e)`,
                borderRadius: '5px',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  left: `${gyroData ? (gyroData.temperature / 70 * 100) : 0}%`,
                  top: '-5px',
                  width: '20px',
                  height: '20px',
                  background: 'white',
                  borderRadius: '50%',
                  border: '2px solid var(--primary)',
                  transform: 'translateX(-50%)'
                }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Altitude */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Altitude</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </div>
          <div className="card-value">
            {gyroData ? gyroData.altitude : '--'}
            <span className="card-unit">m</span>
          </div>
          <div className="chart-container" ref={chartRef}>
            {/* Chart will be rendered here by D3.js */}
          </div>
        </div>

        {/* Data History */}
        <div className="card data-grid">
          <div className="card-header">
            <h3 className="card-title">Data History</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="3" y1="9" x2="21" y2="9"></line>
              <line x1="9" y1="21" x2="9" y2="9"></line>
            </svg>
          </div>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>X-Axis (hPa)</th>
                  <th>Y-Axis (hPa)</th>
                  <th>Z-Axis (hPa)</th>
                  <th>Temp (°C)</th>
                  <th>Altitude (m)</th>
                </tr>
              </thead>
              <tbody>
                {historyData.current.slice().reverse().map((data, index) => (
                  <tr key={index}>
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
      </main>
    </div>
  )
}

export default Dashboard