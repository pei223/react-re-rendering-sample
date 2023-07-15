import { useState } from 'react'
import './App.css'
import ParentComponent from './ParentComponent'

function App() {
  const [message, setMessage] = useState("")

  console.log("Render App", message)

  return (
    <div className="App" style={{
      background: "gainsboro"
    }}>
      <span>Message</span>
      <input value={message} onChange={(e) => setMessage(e.target.value)} />
      <ParentComponent messageFromRoot={message} />
    </div>
  )
}

export default App
