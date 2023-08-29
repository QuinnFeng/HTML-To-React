import { useState } from 'react'
import './App.css'
import '../reset.css'
import '../style.css'
import Header from './components/Header/header.jsx'
import CharacterTable from './components/Table/table'
import CharacterCards from './components/Cards/cards'
import characters from '../public/fma-data'

function App() {

  return (
    <>
        <Header/>
        <CharacterTable characters={characters}/>
        <CharacterCards characters={characters}/>
    </>
  )
}

export default App
