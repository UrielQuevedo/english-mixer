import { Button, Collapse, Typography } from 'antd'
import { useRouter } from 'next/router'
import TableResult from './table-result'

const { Title } = Typography
const { Panel } = Collapse

interface IResult {
  correctWord: string
  result: string
  isCorrect: boolean
}

interface IPropsShowResult {
  results: IResult[]
}

const ShowResult = (props: IPropsShowResult) => {
  const router = useRouter();
  const {failed, correct} = props.results.reduce(
    ({ correct, failed }, currentValue) =>
      currentValue.isCorrect
        ? { failed, correct: [...correct, currentValue] }
        : { correct, failed: [...failed, currentValue] },
    { correct: [], failed: [] }
  )

  return (
    <div className="game-container">
      <div className="game-section">
        <Title level={1}>Result</Title>
        <Collapse defaultActiveKey={['2']} accordion>
          <Panel header="Correct results" key="1">
	    {
	      correct.length === 0 ? <div>You didn't hit one, champ!</div> : <div>adivinaste</div>
	    }
          </Panel>
          <Panel header="Wrong results" key="2">
	    {
	      failed.length !== 0 ? <TableResult lista={failed} /> : <div>You're very good at this game, you haven't missed! :D</div>
	    }
          </Panel>
        </Collapse>
        <button className="button-styled game-button" onClick={() => router.reload()}><span className="text-button">Again</span></button>
      </div>
    </div>
  )
}

export default ShowResult
