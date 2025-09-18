import './App.css'
import {useState} from "react"
import Title from "./Components/Title/title.jsx"
import Board from "./Components/Board/board.jsx"


function App() {
  const [winner, setWinner] = useState(null);
  return (
    <>
      <Title winner={winner}/> 
      <Board winner={winner} setWinner={setWinner}/>
    </>
  )
}

export default App
