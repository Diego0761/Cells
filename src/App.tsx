import { useState } from 'react'
import './App.css'

function App() {
  const [cells, setCells] = useState(['a', 'b', 'c'])

  function changeCellContent(newCellValue: string, indexToUpdate: number) {
    setCells((prevCells) =>
      prevCells.map((cell, i) =>  i === indexToUpdate ? newCellValue : cell)
    )
  }

  function handlePlusClicked(idx: number) {
    setCells(prevCells => [
      ...prevCells.slice(0, idx + 1),
      "",
      ...prevCells.slice(idx + 1)
    ])
  }

  const combinedString = cells.join("")

  return (
    <div className="container">
      <div className="cells">
        {cells.map((cell, idx) => (
          <div className="cell" key={idx}>
            <input
              value={cell}
              onChange={e => changeCellContent(e.currentTarget.value, idx)}
            />
            {idx < cells.length - 1 && 
            <span
              onClick={() => handlePlusClicked(idx)}
            ></span>}
          </div>
        ))}
      </div>
      <div className="combined">
        <div>
          {combinedString}
        </div>
      </div>
    </div>
  )
}

export default App
