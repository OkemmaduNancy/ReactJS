import React, { Component } from "react"

class API extends Component {
    state = {
        newData: [],
        error: ""
    };


    async componentDidMount() {
        try {
            const result = await fetch('http://localhost:4000/v1/product/all')
            if (result.status > 300) {
                alert("Error occured")
            }

            const data = await result.json()
            this.setState({ newData: data });
        } catch (error) {
            this.setState({ error: error.message })
        }
    }
    render() {
        return (
            <div>
                { this.state.newData.map((item, index) => <h1 key={index}>{item.price}</h1>)}
            </div >
        )
    }
}

export default API;

