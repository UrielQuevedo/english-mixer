import { Typography, Button, Row, Col } from 'antd'
import Input from 'antd/lib/input/Input'
import { useRouter } from 'next/router'
import { useState } from 'react'
import ShowResult from './show-result'
import { WordTable } from './word-table'

const { Title } = Typography

interface IWord {
  present: string
  past: string
  past_participe: string
  definition: string
  valueShowed: string
}

interface IPropsGameScreen {
  words: IWord[]
}

const GameScreen = (props: IPropsGameScreen) => {
  const { words } = props
  const [wordsResult, setWordsResult] = useState([])
  const [result, setResult] = useState({ past: '', past_participe: '' })
  const [correct, setCorrect] = useState(0)
  const [failed, setFailed] = useState(0)
  const [round, setRound] = useState(1)
  const [isFinish, setIsFinish] = useState(false)
  const router = useRouter()

  const handleResult = (key: string, value: string) => {
    setResult((prevResult) => ({ ...prevResult, [key]: value }))
  }

  const saveResult = () => {
    const correctWord = words[round - 1]
    const { past, past_participe } = correctWord
    const isValidPast = past === result.past
    const isValidPastParticipe = past_participe === result.past_participe
    const isCorrect = isValidPast && isValidPastParticipe

    isCorrect ? setCorrect(correct + 1) : setFailed(failed + 1)

    setWordsResult([
      ...wordsResult,
      { correctWord, result, isCorrect, isValidPast, isValidPastParticipe },
    ])
    setResult({ past: '', past_participe: '' })
  }

  const handleClick = () => {
    saveResult()
    if (round + 1 > words.length) {
      setIsFinish(true)
    } else {
      setRound((prevRound) => prevRound + 1)
    }
  }

  return (
    <div>
      <div className="game-score">
        <Title level={1}>
          {round} / {words.length}
        </Title>
        <div className="score-container">
          <div className="correct-score">{correct}</div>
          <div className="divider" />
          <div className="failed-score">{failed}</div>
        </div>
      </div>
      {isFinish ? (
        <ShowResult results={wordsResult} />
      ) : (
        <div
          onKeyPress={(e) => (e.key === 'Enter' ? handleClick() : undefined)}
        >
          <Row>
            <Col span={8} className="name-column-table">
              Present
            </Col>
            <Col span={8} className="name-column-table">
              Past
            </Col>
            <Col span={8} className="name-column-table">
              Past Participe
            </Col>
          </Row>
          {words.map(({ definition, ...word }, index) => {
            if (round === index + 1) {
              return (
                <Row>
                  <Col span={8} className="name-column-selected">
		  {word.present}
                  </Col>
                  <Col span={8} className="name-column-value">
		    <Input onChange={(event) => handleResult('past', event.target.value)} autoFocus/>
                  </Col>
                  <Col span={8} className="name-column-value">
		    <Input onChange={(event) => handleResult('past_participe', event.target.value)} />
                  </Col>
                </Row>
              )
            }
          })}
          <button className="button-styled game-button" onClick={handleClick}>
            <span className="text-button">Next</span>
          </button>
        </div>
      )}
    </div>
  )
}

export { GameScreen }
