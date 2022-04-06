import { Button, Typography } from 'antd'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const { Title } = Typography;

const Home: NextPage = () => {
  const router = useRouter()

  const handleClick = (mode: string) => {
    router.push(`/game?mode=${mode}`)
  }

  return (
    <div>
      <div style={{ textAlign:'center', paddingTop: '35px' }}>
	<Title>English Word Shuffler</Title>
      </div>
      <div className="select-container">
        <div className="select-game" onClick={() => router.push(`/game?mode=normal`)}>Normal</div>
        <div className="select-game" onClick={() => router.push(`/game?mode=fast`)}>Fast</div>
        <div className="select-game" onClick={() => router.push('/practice')}>Practice</div>
      </div>
    </div>
  )
}

export default Home
