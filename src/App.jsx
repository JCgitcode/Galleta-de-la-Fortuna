import './App.css'
import { useState } from 'react'
import phrases from './utils/phrases.json'
import bgArr from './utils/bgArr.json'
import getRamdomFromArr from './services/getRamdomFromArr'
import Phrase from './components/Phrase'
import ButtonPhrase from './components/ButtonPhrase'

function App() {

const [phraseRandom, setPhraseRandom] = useState(getRamdomFromArr(phrases ))
const [bgApp, setBgApp] = useState(getRamdomFromArr(bgArr))

const objStyle = {
  backgroundImage: `url('../fondo${bgApp}.jpg')`
}

  return (
    <div style={objStyle} className='app'>
      <h1 className='app_tittle'> Galleta de la fortuna </h1>
      <article className='app__card'>
        <Phrase
          phraseRandom = {phraseRandom}
        />
        <ButtonPhrase 
          setPhraseRandom = {setPhraseRandom}
          setBgApp = {setBgApp}
        />
      </article>
    </div>
  )
}

export default App