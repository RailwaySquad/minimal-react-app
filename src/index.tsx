import { createRoot } from "react-dom/client"

import "./index.scss"

const App = () => {
  return (
    <div className="app">
      <div className="app-container">
        <h1>Hello</h1>
      </div>
    </div>
  )
}

const root = document.getElementById("root") as HTMLElement
createRoot(root).render(<App />)
