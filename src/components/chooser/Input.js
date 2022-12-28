import React, { useState } from 'react'

const Input = (props) => {
    const [userInputA, setUserInputA] = useState("")
    const handleChangeA = (e) => {
        console.log(e.target.value)
        setUserInputA(e.target.value)
      }

      const handleClickA = (input) => {
        props.addToListA(input)
        props.addToChoices(input)
      }
      const [userInputB, setUserInputB] = useState("")
      const handleChangeB = (e) => {
          console.log(e.target.value)
          setUserInputB(e.target.value)
        }
  
        const handleClickB = (input) => {
          props.addToListB(input)
          props.addToChoices(input)
        }
  return (
<>
<div>Person A:</div>
<input type="text" value={userInputA} onChange={handleChangeA}/>
<button onClick={() => {handleClickA(userInputA)}}>Submit</button>
<div>Person B:</div>
<input type="text" value={userInputB} onChange={handleChangeB}/>
<button onClick={() => {handleClickB(userInputB)}}>Submit</button>
</>
  )
}

export default Input