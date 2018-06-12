import React, { Component } from 'react';

export default class Join extends Component {
    state = {codeInput: ''}

    handleCodeInput = ({target}) => this.setState({codeInput: target.value})

    render() {
        return (
            <div>
                <p>Enter code from instructor:</p>
                <input onChange={this.handleCodeInput}/>
                <button type='' className=''>join</button>
            </div> 
        )
    }
}