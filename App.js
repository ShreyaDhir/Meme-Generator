/**
 * Create the boilerplate to get React to render something on the screen
 * Render an <App /> component, which you'll need to create separately
 */

import React from 'react'
import MemeGenerator from './components/MemeGenerator'
import Header from './components/Header'

const App = () => {
    return (
        <div>
            <Header/>
            <MemeGenerator/>
        </div>
    )
}

export default App;