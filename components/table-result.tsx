import { Col, Row } from 'antd'

const TableResult = ({ lista }) => {
  console.log(lista)
  return (
    <div>
      <Row>
        <Col span={8} className="name-column-title">Present</Col>
        <Col span={8} className="name-column-title">Past</Col>
        <Col span={8} className="name-column-title">Past Participe</Col>
      </Row>
      {lista.map(({ result: { present, past, past_participe }, correctWord, isValidPast, isValidPastParticipe }, index) => (
	<div style={{ marginTop: '5px', borderBottom:'1px solid black', fontSize:'18px' }}>
	  <Row key={index}>
	    <Col span={8} style={{ background: '#E9E9E9', textTransform: 'capitalize', textDecoration: 'bold' }}></Col>
	    <Col span={8} >{correctWord.past}</Col>
	    <Col span={8} >{correctWord.past_participe}</Col>
	  </Row>
	  <Row key={index}>
	    <Col span={8} style={{ background: '#E9E9E9', textTransform: 'capitalize', fontWeight: 'bold' }}>{correctWord.present}</Col>
	    <Col span={8} style={ isValidPast ? { color:'green' } : { color: 'red' }}>{past === '' ? '-' : past}</Col>
	    <Col span={8} style={ isValidPastParticipe ? {color: 'green'} : {color:'red'}}>{past_participe === '' ? '-' : past_participe}</Col>
	  </Row>
	</div>
      ))}
    </div>
  )
}

export default TableResult
