import React, {Component} from 'react'

function Article(props) {
    const [count, setCount] = React.useState(0);
    const [inputValue, setInputValue] = React.useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }
    const handleDecrease = () => {
        setCount(count - 1);
    }
    const handleReset = () => {
        setCount(0);
}
    const handleDivide = () => {
        setCount(count / inputValue);
    }

//  class Article extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0
//         };
//     }
//     handleClick=() => {
//         this.setState({count: this.state.count + 1});
//     }
//     handleDecrease=() => {
//         this.setState({count: this.state.count - 1});
//     }
//     handleReset=() => {
//         this.setState({ count: 0 });
//     }
//     render() {

        return (
            <div>
                <h1>Article Title</h1>
                <h3>{count}</h3>
                <button onClick={handleClick}>Click Me To Increase</button>
                <br />
                <button onClick={handleDecrease}>Click Me To Decrease</button>
                <br />
                <button onClick={handleReset}>Reset</button>
                <br />
                <input type="integer" value={inputValue} onChange={(e) => setInputValue(parseInt(e.target.value))} />
                <button onClick={handleDivide}>Divide</button>
                <p>This is the article content.</p>
            </div>
        )
    }
 

 export default Article