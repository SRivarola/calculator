import { useState } from 'react'
import ButtonsPanel from './components/ButtonsPanel'
import Display from './components/Display'
import operate from './operate'

function App() {

  const [display, setDisplay] = useState({
    total: null,
    next: null,
    operation: null,
  })

  const isNumber = (item) => {
    return /[0-9]+/.test(item);
  }

  const handleClick = (buttonName) => {
    if(buttonName === 'C'){
      return setDisplay({
        total: null,
        prev: null,
        next: null,
        operation: null,
      })
    }

    if(isNumber(buttonName)){

      if(display.operation){
      
        if (display.next) {
          return setDisplay({
            ...display,
            next: display.next + buttonName
          });
        }

        return setDisplay({ 
          ...display,
          next: buttonName 
        })
      }

      if (display.next) {
        const next = display.next === "0" ? buttonName : display.next + buttonName;
        return setDisplay({
          ...display,
          next,
          total: null,
        })
      }

      return setDisplay({
        ...display,
        next: buttonName,
        total: null,
      })

    }

    if (buttonName === ".") {
      if (display.next) {
        // ignore a . if the next number already has one
        if (display.next.includes(".")) {
          return {};
        }
        return setDisplay({ ...display, next: display.next + "." })
      }
      return setDisplay({ ...display, next: "0." })
    }
  
    if (buttonName === "=") {
      if (display.next && display.operation) {
        return setDisplay({
          total: operate(display.total, display.next, display.operation),
          next: null,
          operation: null,
        })
      } else {
        // '=' with no operation, nothing to do
        return {};
      }
    }
    
    // When the user presses an operation button without having entered
    // a number first, do nothing.
    // if (!obj.next && !obj.total) {
    //   return {};
    // }

     // User pressed an operation button and there is an existing operation
    if (display.operation) {
      return setDisplay({
        total: operate(display.total, display.next, display.operation),
        next: null,
        operation: buttonName,
      })
    }

    // no operation yet, but the user typed one

    // The user hasn't typed a number yet, just save the operation
    if (!display.next) {
      return setDisplay({ ...display, operation: buttonName })
    }

    // save the operation and shift 'next' into 'total'
    return setDisplay({
      total: display.next,
      next: null,
      operation: buttonName,
    })
  }

  return (
    <div className="relative h-screen w-screen flex justify-center items-center">
      <div className='w-[220px] h-auto p-5 bg-[#b7c2f2] rounded-lg shadow-2xl'>
        <Display value={ display.next || display.total || 0 }/>
        <ButtonsPanel onHandleClick={handleClick} />
      </div>
    </div>
  )
}

export default App
