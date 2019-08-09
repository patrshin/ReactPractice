import React from 'react'
import ReactDOM from 'react-dom'
import Menu from '../components/Menu'
import data from '../data/recipeList'

function App() {
  return <Menu recipes={data} />
}

ReactDOM.render(<App />, document.getElementById('root'))
