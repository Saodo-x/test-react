import React from 'react'

class Clock extends React.component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()}
    }

    componentDidMount() {
        this.timeID = setInterval(()=>this.tick,1000)
    }

    componentWillUnmount() {
        clearInterval(this.timeID)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}

ReactDOM.render(
    <Clock/>,
    document.getElementById('root')
)