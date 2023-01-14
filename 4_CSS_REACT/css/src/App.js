import './App.css';
import './index.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title'
import { useState } from "react"

function App() {
  const n = 9

  const [name] = useState("tito")

  const redTitle = true

  return (
    <div className="App">
      <h1>React com css</h1>
      <MyComponent />
      <p>Este é o paragrafo do App.js</p>

      {/* Inline CSS*/}
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>Este elemento foi utilizado de forma inline</p>
      {/* Css inline dinamico*/}
      <h2 style={n < 10 ? { color: "purple" } : { color: "pink" }}>CSS Dinamico</h2>
      <h2 style={name === "tito" ? { color: "green", backgroundColor: "#000" } : null}>CSS Dinamico 2</h2>

      {/* Classe dinamica */}
      <h2 className={redTitle ? "red-title" : "title"}> Este título vai ter classe dinamica</h2>

      {/* CSS Modules */}
      <Title></Title>


    </div>


  );
}

export default App;
