import App from "./title.jsx";
import {useState} from 'react';

function Game_Settings() {
    let [page_state, change_page] = useState('game_settings')

    switch (page_state) {
        case 'game_settings':
            return (
                <div className="settings_menu">
                    <button onClick={() => {change_page('title')}}>Back</button>
                    <p>WIP DIP</p>
                </div>
            )
        case 'title':
            return <App></App>;
        default:
            return <h1>Something is wrong with the variable: "page_state" in "Game_Settings". Please refresh.</h1>
    }
}

export default Game_Settings;