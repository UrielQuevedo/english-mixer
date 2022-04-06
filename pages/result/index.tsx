import type { NextPage } from 'next'
import { Collapse, Typography } from 'antd';
import { useRouter } from 'next/router'
import { MODES, WORDS } from '../../utils/constants'

const { Title } = Typography;
const { Panel } = Collapse;

const ANSWERS: string[] = [];

const Game: NextPage = () => {
  return (
    <div className="game-container">
      <div className="game-section">
	<Title level={1}>Result</Title>
	<Collapse defaultActiveKey={['2']} accordion>
	<Panel header="Show good results" key="1">
	  <p>Hola</p>
	</Panel>
	<Panel header="Wrong results" key="2">
	  <p>Hola</p>
	</Panel>
      </Collapse>
      </div>
    </div>
  )
}

export default Game

