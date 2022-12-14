import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
