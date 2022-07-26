import { useState } from 'react'
import Question from './Question'
import Confetti from 'react-confetti'

const Quiz = ({ categoryName, questionData }) => {
  const [currentQ, setCurrentQ] = useState(0)
  const [correct, setCorrect] = useState(false)

  if (questionData && currentQ === questionData.length - 1) {
    return (
      <div
        className="endgame"
        style={{ display: 'grid', 'place-content': 'center', height: '100vh' }}
      >
        <Confetti />
        <h1>No more Qs!</h1>
      </div>
    )
  }
  const handleCorrect = () => {
    setCorrect(true)
  }
  const handleNext = () => {
    setCurrentQ(currentQ + 1)
    setCorrect(false)
  }
  return (
    <div className="container">
      <h2>{categoryName}</h2>
      {questionData && (
        <>
          <Question
            question={questionData[currentQ].question}
            answerChoices={questionData[currentQ].answerChoices}
            correctAnswer={questionData[currentQ].correctAnswer}
            handleCorrect={handleCorrect}
          />
          {correct && (
            <div className="result">
              🐔 Hello I am here to tell you that you got this question right 🐔
            </div>
          )}
        </>
      )}
      <button className="next" onClick={handleNext}>
        Next
      </button>
    </div>
  )
}

export default Quiz
