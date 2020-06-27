import './App.css';

import React from 'react'

import TitlePane from "./components/title-pane/TitlePane.component"

import SearchableCards from './components/searchable-cards/SearchableCards.component'

export default function App() {
    return (
        <div className="App">
            <div className="App-header">
                <TitlePane title="Monsters Rolodex" />
                <SearchableCards />
            </div>
        </div>
    )
}
