import React from 'react';
import CoinList from './Components/CoinList.js';
import AccountBalance from './Components/AccountBalance.js'
import ExchangeHeader from './Components/ExchangeHeader';
import styled from 'styled-components';

const Div = styled.div`
text-align: center;
background-color: #26067e;
color: #cccccc;
`;

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      balance: 100000,
      coinData: [
        {name: "Bitcoin", ticker:"BTC", price: 9999.99},
        {name: "Ethereum", ticker:"ETH", price: 399.99}
      ]
    }
  }
  render(){
    return (
      <Div>
        <ExchangeHeader />
        <AccountBalance amount={this.state.balance} />
        <CoinList coinData={this.state.coinData} />
      </Div>
    );
  }
}

export default App;
