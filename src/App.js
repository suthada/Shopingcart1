import logo from './logo.svg';
import './App.css';
import './index.css';

function App() {
  
  const backgroundColor = '#fa8072';
  
  const divStyle = {
    backgroundColor: backgroundColor, 
    padding: '20px' 
  };
  const darkredTextStyle = {
    color: 'darkred' 
  };

  return (
    <div style={divStyle}>
      <h1 style={darkredTextStyle}>This is React Lab</h1>
    </div>
  );
}

export default App;
