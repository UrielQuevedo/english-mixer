import type { NextPage } from 'next'
import { Typography, Table, Button, Row, Col } from 'antd'
import { WORDS } from '../../utils/constants'
import { WordTable } from '../../components/word-table'
import { useRouter } from 'next/router'

const { Title } = Typography

const columns = [
  {
    title: 'Present',
    dataIndex: 'present',
    key: 'present',
  },
  {
    title: 'Past',
    dataIndex: 'past',
    key: 'past',
  },
  {
    title: 'Past Participe',
    dataIndex: 'past_participe',
    key: 'past_participe',
  },
]

const Practice: NextPage = () => {
  const router = useRouter()

  return (
    <div className="game-container">
      <div className="game-section">
	<button className="button-styled" onClick={() => router.push('/')}>
	  <span className="text-button">Back</span>
	</button>
	<div style={{ border: '1px solid black' }}>
	  <Row style={{ borderBottom: '1px solid black' }}>
	    <Col span={8} className="name-column-title">
	    Present
	    </Col>
	    <Col span={8} className="name-column-title">Past</Col>
	    <Col span={8} className="name-column-title">Past Participe</Col>
	  </Row>
	  {WORDS.map(({ present, past, past_participe }, index) => (
	    <Row key={index}>
	      <Col span={8} className="name-column-practice">{present}</Col>
	      <Col span={8} className="name-column-practice">{past}</Col>
	      <Col span={8} className="name-column-practice">{past_participe}</Col>
	    </Row>
	  ))}
	</div>
      </div>
    </div>
  )
}

export default Practice
