import {useState} from 'react'
import Game_Settings from './game_settings'
import './title.css'

function App() {
  let [page_state, change_page] = useState('title')

  switch (page_state) {
    case 'title':
      return (
        <div className='title_menu'>
          <h1 className="title">Hangman</h1>
          <div className="title_buttons">
            <button onClick={() => {change_page('game_settings')}}>Play!</button>
            <button>How to Play?</button>
            <button>Settings</button>
          </div>
          <a className="github_link" href="https://github.com/agent10I/hangman">
            <img src="src/assets/github-logo.png" alt="A Github logo." width="30" height="30"/>
            <p className="small_link">Made by Agent10I</p>
          </a>
        </div>
      )

    case 'game_settings':
      return <Game_Settings></Game_Settings>

    default:
      return <h1>Something is wrong with the variable: "page_state" in "App". Please refresh.</h1>
  }
}

export default App;