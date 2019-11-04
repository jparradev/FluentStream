import React, { Component } from 'react';
import axios from 'axios'


class SingleBeer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            beers: []
        }
        this.addLike = this.addLike.bind(this)
    }



    componentDidMount() {
        axios.get("https://beer.fluentcloud.com/v1/beer/")
            .then(res => {
                let x = res.data
                let singleBeer = x[Math.floor(Math.random()*x.length)] 
                this.setState({
                    beers: singleBeer
                })
                console.log(this.state.beers)
            })    
    }

    addLike(e){
        e.preventDefault()
        const newLikes = this.state.beers.likes ++
        const id = this.state.beers.id
        const url = "https://beer.fluentcloud.com/v1/beer/" + id
        this.setState = {
            beers: newLikes
        }
        const likes = this.state.beers.likes
        console.log(likes)
        axios.put(url, {"likes": likes})
        .then(res => {
            window.location.reload()
            console.log(res.data)})
        
        
    }


    render() {

        let { beers } = this.state

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md">
                            <div>
                                <h4>NAME: {beers.name}</h4>
                                <button className="btn btn-outline-info"onClick={this.addLike}>Like {beers.likes}</button><hr/>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SingleBeer;
