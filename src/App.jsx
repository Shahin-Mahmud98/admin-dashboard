import { useState } from "react"
import Dashboard from "./components/shared/Dashboard"
// import Layout from "./components/shared/Layout"
import Sidebar from "./components/shared/Sidebar"


const App = () => {
  const [sidebarToggle,setSidebarToggle] = useState(false);
  return (
    <div className="flex">
      <Sidebar 
      sidebarToggle={sidebarToggle}
      />
      <Dashboard 
      sidebarToggle={sidebarToggle}
      setSidebarToggle={setSidebarToggle}
      />
    </div>
  )
}

export default App

