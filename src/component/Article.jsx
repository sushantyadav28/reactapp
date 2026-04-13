import React, {Component} from 'react'
// import styled from 'styled-components';
import styled from '@emotion/styled';



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
                <Button onClick={handleClick}>Click Me To Increase</Button>
                <br />
                <Button onClick={handleDecrease}>Click Me To Decrease</Button>
                <br />
                <Button onClick={handleReset}>Reset</Button>
                <br />
                <input type="integer" value={inputValue} onChange={(e) => setInputValue(parseInt(e.target.value))} />
                <Button yellow onClick={handleDivide}>Divide</Button>
                <p>This is the article content.</p>
            </div>
        )
    }
 

 export default Article

 const Button = styled.button`
    background-color: ${props => props.yellow ? 'blue' : 'red'};
    color: white;
    width: 100px;
    height: 40px;
    border-radius: 5px;
    border: 2px solid black;
    margin: 5px;
    `