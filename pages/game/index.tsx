import type { NextPage } from 'next'
import { Typography, Button } from 'antd';
import { useRouter } from 'next/router'
import { MODES, WORDS } from '../../utils/constants'
import { GameScreen } from '../../components/game-screen';
import { useEffect, useState } from 'react';
import { GameScreenFast } from '../../components/game-screen-fast';

const { Title } = Typography;

type StringQueryParams = Record<keyof QueryParams, string>;

interface QueryParams {
  mode: string;
}

const Game: NextPage = () => {
  const { query } = useRouter();
  const router = useRouter();
  const { mode } = query as StringQueryParams;
  const [isCorrectMode, setIsCorrectMode] = useState(true);


  useEffect(() => {
    setIsCorrectMode(MODES.includes(mode))}
  , [mode]);


  const getWordsToPlay = () => {
    const WORDS_SHUFFLER = WORDS.sort(() => 0.5 - Math.random());
    return WORDS_SHUFFLER.map(word => ({...word, valueShowed: 'present'}));
  }

  if (!isCorrectMode) {
    return <div>Loading...</div>
  }

  return (
    <div className="game-container">
      <div className="game-section">
	<Button onClick={() => router.push('/')} danger type="primary" style={{display: 'flex', alignSelf:'flex-start'}}>Back</Button>
	<Title level={4}>Mode: {mode}</Title>
	{ mode === 'normal' && <GameScreen words={getWordsToPlay()} /> }
	{ mode === 'fast' && <GameScreenFast words={getWordsToPlay()} /> }
      </div>
    </div>
  )
}

export default Game
