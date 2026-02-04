import { useState } from 'react'
import './App.css'
import api from './api/axios'

function App() {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)

  const handleCorsTest = async () => {
    try {
      setError(null)
      setResponse(null)
      
      const payload = {
        email: "user@example.com",
        nickname: "test_user",
        profileImageUrl: "https://example.com/profile.jpg",
        industryId: 1,
        jobCategoryId: 1
      }

      console.log('Sending POST /user/signup with:', payload)
      
      const res = await api.post('/user/signup', payload); 
      setResponse(res.data)
      console.log('Response:', res)
    } catch (err) {
      console.error('Error:', err)
      setError(err.message || 'An error occurred')
    }
  }

  return (
    <div className="container">
      <h1>CORS Test</h1>
      <div className="card">
        <button onClick={handleCorsTest}>
          POST /user/signup
        </button>
      </div>
      
      {response && (
        <div className="result success">
          <h3>Response Data:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}

      {error && (
        <div className="result error">
          <h3>Error:</h3>
          <pre>{error}</pre>
        </div>
      )}
    </div>
  )
}

export default App
