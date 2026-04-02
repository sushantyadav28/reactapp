import React, {Component} from 'react'
 class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    handleClick=() => {
        this.setState({count: this.state.count + 1})
        }
    handleDecrease=() => {
        this.setState({count: this.state.count - 1})
    }
    render() {
        return (
            <div>
                <h1>Article Title</h1>
                <h3>{this.state.count}</h3>
                <button onClick={this.handleClick}>Click Me To Increase</button>
                <br />
                <button onClick={this.handleDecrease}>Click Me To Decrease</button>
                <h3>{this.props.title}</h3>
                <p>This is the article content.</p>
            </div>
        )
    }
 }

 export default Article