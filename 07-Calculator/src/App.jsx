import './App.css'
import { useState } from 'react'
import { buttons } from './assets/buttons'
import { ButtonsRow } from './components/ButtonsRow'

const numberButtonClasses = 'btn btn-info w-100'
const operatorButtonClasses = 'btn btn-warning w-100'
const specialButtonClasses = 'btn btn-danger w-100'

function App() {
  const [display, setDisplay] = useState({
    value: '0',
    hasPoint: false,
    previousValue:'0',
    operatorHasBeenPressed: false,
    operator: ''
  })

const updateDisplay = (value) => {
  if(value=== '.'){
    if(display.hasPoint){
      return
    }
    setDisplay({
      ...display,
      value: display.value + value,
      hasPoint: true
    })
    return
  }

  if(display.value === '0'){
    setDisplay({
      ...display,
      value: limit(value)
    })
  } else {
    setDisplay({
      ...display,
      value: limit(display.value + value)
    })
  }
}

const clearDisplay =() => {
  setDisplay({
      ...display,
      value: '0',
      hasPoint: false
    })
}

const deleteCharacter =() => {
  setDisplay({
    ...display,
    value: display.value.slice(0, -1),
    hasPoint: (display.value.slice(-1) === '.') ? false : display.hasPoint
  })
  if(display.value.length === 1){
    setDisplay({
      ...display,
      value: '0',
      hasPoint: false
    })
  }
}

const setOperator = (operator) => {
  setDisplay({
    ...display,
    previousValue: display.value,
    operatorHasBeenPressed: true,
    hasPoint: false,
    value: '0',
    operator
  })
}

const calculate = () => {

//  let result = 0

//  if(display.operator === '%'){
//    resul = eval(`${display.previousValue} /100 * ${display.value}`)
//  } else {
//    result = eval(`${display.previousValue} ${display.operator} ${display,value}`)
//  }

let result = (display.operator === '%')?
  eval(`${display.previusValue} / 100 * ${display.value}`) :
  eval(`${display.previousValue} ${display.operator} ${display.value}`)

  result = result + ""

  setDisplay({
    ...display,
    value: eval(`${display.previousValue} ${display.operator} ${display.value}`),
    operatorButtonClasses: false,
    hasPoint: result.includes("."),
    previousValue:'0'
  })
}

const limit = (string = '', length = 10) => {
  return string.slice(0, length)
}

const buttonsFunctions = ({
    updateDisplay,
    clearDisplay,
    deleteLastCharacter,
    setOperator,
    calculate
  })
      return (
      <div>
        <h1>Calculator</h1>
        <hr />
        <table className="center">
          <tbody>
            <tr>
              <td className='text-end' colSpan={4}>
                <h2>{display.value}</h2>
              </td>
            </tr>
            {
             buttons.map((row, index) => {
                      return (
              <ButtonsRow key={index} row ={row} />
            )
          })
        }

          </tbody>
        </table>
            </div>
    )
}

export default App