import { useState } from 'react'
import './App.css'
import { testCarModels } from './tests/car-model.test'
import CarDealsComparison from './components/car_deals_react_app'

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
        < CarDealsComparison />
      </div>
    </>
  )
}

export default App
