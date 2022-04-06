import { Typography, Button, Row, Col } from 'antd'
import Input from 'antd/lib/input/Input'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
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

const GameScreenFast = (props: IPropsGameScreen) => {
  const { words } = props
  const [wordsResult, setWordsResult] = useState([])
  const [result, setResult] = useState({ past: '', past_participe: '' })
  const [correct, setCorrect] = useState(0)
  const [failed, setFailed] = useState(0)
  const [isEneabled, setIsEnabled] = useState(true)
  const [round, setRound] = useState(1)
  const [isFinish, setIsFinish] = useState(false)
  const router = useRouter()

  const handleResult = (key: string, value: string) => {
    setResult((prevResult) => ({ ...prevResult, [key]: value }))
  }

  const saveResult = (isCorrect) => {
    const correctWord = words[round - 1]
    const { past, past_participe } = correctWord

    isCorrect ? setCorrect(correct + 1) : setFailed(failed + 1)

    setWordsResult([
      ...wordsResult,
      { correctWord, result, isCorrect},
    ])
    setResult({ past: '', past_participe: '' })
  }

  const handleHit = () => {
    saveResult(true)
    handleClick();
  }

  const handleMiss = () => {
    saveResult(false)
    handleClick();
  }

  const handleClick = () => {
    if (round + 1 > words.length) {
      setIsFinish(true)
    } else {
      setRound((prevRound) => prevRound + 1)
    }
  }

  useEffect(() => {
    const handleEsc = (event) => {
       if (event.key === '2') {
	handleMiss();
      }
             if (event.key === '1') {
	handleHit();
      }

    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [round]);

  return (
    <div onKeyPress={(e) => console.log(e.key)}>
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
        <div>
	  <Title level={5}>
	    Press 1 for hit, or 2 for miss
	  </Title>
          {words.map(({ definition, ...word }, index) => {
            if (round === index + 1) {
              return (
		<div className="fast-container">
		  <div className="fast-card-title">
		    {word.valueShowed}
		  </div>
		  <div className="fast-container">
		    <div className="fast-card">
		      {word.present}
		    </div>
		  </div>
		  <button style={{ marginTop: '10px' }} onClick={() => setIsEnabled((prevValue) => !prevValue)}>{isEneabled ? 'Disabled' : 'Enabled'} Blur</button>
		  <div className="show-fast-value">
		    <Row style={{ background: '#FAFAFA', fontSize: '18px' }}>
		      <Col span={12}>Past</Col>
		      <Col span={12}>Past Participe</Col>
		    </Row>
		    <Row style={{ marginTop: '15px', fontSize: '16px' }}>
		      <Col span={12} className={isEneabled ? "show-blur-value" : ""}>{word.past}</Col>
		      <Col span={12} className={isEneabled ? "show-blur-value" : ""}>{word.past_participe}</Col>
		    </Row>
		  </div>
		</div>
              )
            }
          })}
	  <button onClick={handleMiss}>miss</button>
	  <button onClick={handleHit}>hit</button>
        </div>
      )}
    </div>
  )
}

export { GameScreenFast }

