import React from 'react'
import './App.css'
import TopBar from './component/TopBar'
import Article from './component/Article'

function App() {
  const [title, setTitle] = React.useState('Sample Title')
  return (
    <>
      <TopBar />
      <Article title={title} />
    </>
  )
}

export default App