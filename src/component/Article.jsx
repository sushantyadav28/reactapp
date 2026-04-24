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
  background: ${props => props.yellow 
    ? 'linear-gradient(135deg, #4facfe, #00f2fe)' 
    : 'linear-gradient(135deg, #ff6a00, #ee0979)'};

  color: white;
  padding: 10px 16px;
  min-width: 140px;
  height: 45px;

  border: none;
  border-radius: 12px;

  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;

  cursor: pointer;

  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);

  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-2px) scale(1.03);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  }

  &:active {
    transform: scale(0.96);
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  }
`;