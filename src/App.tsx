import { useState } from 'react'
import './App.css'
import { testCarModels } from './tests/car-model.test'

function App() {
  const [count, setCount] = useState(0)
  const [testResults, setTestResults] = useState<{ 
    success: boolean; 
    errors: string[]; 
    message: string;
  } | null>(null)

  const runTests = () => {
    const results = testCarModels()
    setTestResults(results)
  }

  return (
    <>
      <div className="container">
        <h1>Érezénnyit</h1>
        <p>A frontend React TypeScript application for car brand data management</p>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        
        <div className="test-section">
          <h2>Car Model Tests</h2>
          <button onClick={runTests}>Run Car Model Tests</button>
          
          {testResults && (
            <div className={`test-results ${testResults.success ? 'success' : 'error'}`}>
              <h3>{testResults.message}</h3>
              {!testResults.success && (
                <ul>
                  {testResults.errors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App
