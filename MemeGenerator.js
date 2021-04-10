import React, { Component } from 'react'

/**
 * Initialize state to save the following data:
 *      top text
 *      bottom text
 *      random image (intialize with "http://i.imgflip.com/1bij.jpg")
 */

class MemeGenerator extends Component {
    constructor(props) {
        super()
        this.state = {
            
        }
    }
    render() {
        return (
            <header>
                <img 
                    src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" 
                    alt="Problem?"
                />
                <p>Meme Generator</p>
            </header>
        )
    }
}

export default MemeGenerator
