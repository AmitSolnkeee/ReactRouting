import React, { Component } from 'react'

export default class Unmounting extends Component {
    render() {
        return (
            <div>
                <h1>Unmounting</h1>
                <p>This is the last phase in the component’s lifecycle. As the name clearly suggests, the component gets unmounted from the DOM in this phase. The method that is available in this phase is:</p>
                 <h3>ComponentWillUnmount()</h3>
                 <p>This method is called before the unmounting of the component takes place. Before the removal of the component from the DOM, ‘componentWillUnMount’ executes. This method denotes the end of the component’s lifecycle.</p>
                 <img className="pi" src="https://cdn-media-1.freecodecamp.org/images/NpWCjYyzfnJkn7rXwDmyWwK2DqInFJu6-g1O" alt="img"></img>
            </div>
        )
    }
}
