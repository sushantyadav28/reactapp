import React from 'react'
import './App.css'
import TopBar from './component/TopBar'
import Article from './component/Article'
import Contact from './component/Contact'

function App() {
  const [title, setTitle] = React.useState('Sample Title')
  return (
    <>
      <TopBar />
      <Article title={title} />
      <Contact />
    </>
  )
}

export default App