import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
                <img className="pic" src="https://www.tutorialswebsite.com/wp-content/uploads/2019/09/reactjs-component-lifecycle-methods.jpeg" alt="img"></img>
                <h1>Lifecycle Methods</h1>
                <h3>A component’s lifecycle is broadly classified into four parts:</h3>
                <ul>
                <li>Initialization</li>
                <li>Mounting</li>
                <li>Updating</li>
                <li>Unmounting</li>
                </ul>
                
            </div>
        )
    }
}
