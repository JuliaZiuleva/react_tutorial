import React, { Component } from 'react'

class Dropdown extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            isOpened: false
        }
    }

    toggleDropdownState() {
        this.setState({isOpened: !this.state.isOpened})
    }

    

    render() {
        console.log( this.state)
        let dropdownText = ''
        if (this.state.isOpened) {
            dropdownText = <div>text in dropdown</div>
        }
        
        return (
            <div onClick={this.toggleDropdownState.bind(this)}>
                Dropdown123456
                {dropdownText}
            </div>
        )
    }

}

export default Dropdown
