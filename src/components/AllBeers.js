import React, { Component } from 'react';
import axios from 'axios'

class AllBeers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            beers: []
        }
        this.addLike = this.addLike.bind(this)
    }


    componentDidMount() {
        axios.get("https://beer.fluentcloud.com/v1/beer")
            .then(res => {
                console.log(res.data)
                this.setState({
                    beers: res.data
                })
            })
    }

    addLike(e){
        // e.preventDefault()
        // const newLikes = this.state.beers.likes ++
        // const id = this.state
        // const url = "https://beer.fluentcloud.com/v1/beer/" + id
        // console.log(id)
        // this.setState = {
        //     beers: newLikes
        // }
        // const likes = this.state.beers.likes
        // console.log(likes)
        // axios.put(url, {"likes": likes})
        // .then(res => {
        //     window.location.reload()
        //     console.log(res.data)})   
    }


    render() {

        let { beers } = this.state

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        {beers.map(beer => (
                            <div>
                                <h4 key={beer.id}>
                                    NAME: {beer.name}</h4>
                                <button className="btn btn-outline-info" key={beer.name} onClick={this.addLike}>Like {beer.likes}</button><hr/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default AllBeers;
