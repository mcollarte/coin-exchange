import './App.css';
import logo from './logo.svg'
import Coin from './Components/Coin/Coin.js';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="React Logo" className="App-logo" />
        <h1 className ="App-header">
          Coin Exchange
        </h1>
      </header>
      <table className="coin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody >
              <Coin name="Bitcoin" ticker="BTC" price={100000} /> 
              <Coin name="Ethereum" ticker="Eth" price={200} /> 
        </tbody>
      </table>
    </div>
  );
}

export default App;
