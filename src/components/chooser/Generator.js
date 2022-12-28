import React, { useState } from 'react'

const Generator = (props) => {
    const [currentOption, setCurrentOption] = useState()


    const generate = (array) => {
        setCurrentOption(array[Math.floor(Math.random() * array.length)])
        return currentOption
        }

    const answerA = (activity) => {
        props.addToListA(activity)
        generate(props.choices)
    }

    const answerB = (activity) => {
        props.addToListB(activity)
        generate(props.choices)
    }

  return (
    <>
    <button onClick={() => {generate(props.choices)}}>Give me another option</button>
    <div>
    <div>Person A, what do you think about... {currentOption}</div>
    <button onClick={() => {answerA(currentOption)}}>Yes</button>
    <button onClick={() => {generate(props.choices)}}>No</button>
    </div>
    <div>
    <div>Person B, what do you think about... {currentOption}</div>
    <button onClick={() => {answerB(currentOption)}}>Yes</button>
    <button onClick={() => {generate(props.choices)}}>No</button>
    </div>
    </>
  )
}

export default Generator