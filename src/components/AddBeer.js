import React, { Component } from 'react'
import axios from 'axios'

class AddBeer extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            likes: 0
        }
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })

    }

    submitForm = (e) => {
        e.preventDefault()
        const { name, likes } = this.state
        
        console.log(name, likes)
        axios.post('https://beer.fluentcloud.com/v1/beer', {name, likes})
            .then(res => {
                console.log(res)
            })
        
}

    render() {
        return (
            <div>
                <h3>Add a beer!</h3>
                <form>
                    <div>
                        <label>Beer Name:  </label>
                        <input type="text"
                            name='name'
                            value={this.state.name}
                            onChange={this.onChange}
                        />
                    </div>
                    <div>
                        <button type="submit" value="Add Beer" className="btn btn-primary" onClick={this.submitForm} >Add Beer!</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddBeer