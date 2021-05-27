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
  state = {
    balance: 100000,
    showBalance: true,
    coinData: [
      {name: "Bitcoin", ticker:"BTC", balance: 10000, price: 9999.99},
      {name: "Ethereum", ticker:"ETH", balance: 20, price: 399.99}
    ]
  }

  handleRefresh = (changedTickerValue) =>{
    const newCoinData = this.state.coinData.map((values) => {
      let newPrice = values.price;
      if(values.ticker === changedTickerValue){
        const randomPercentage  = 0.995 + Math.random()*0.01;
        newPrice = values.price * randomPercentage;
      }
      return { 
        ...values,  //JS let's us do this so as to keep all other values the same
        price: newPrice};
    } );
    this.setState( {coinData: newCoinData});
  }

  handleShowBalance= (balanceDisplay) =>{
    this.setState({showBalance:!this.state.showBalance });
  }

  render(){
    return (
      <Div>
        <ExchangeHeader />
        <AccountBalance 
            amount={this.state.balance} 
            showBalance ={this.state.showBalance} 
            handleShowBalance = {this.handleShowBalance}/>
        <CoinList 
            coinData={this.state.coinData} 
            showBalance = {this.state.showBalance} 
            handleRefresh={this.handleRefresh} />
      </Div>
    );
  }
}

export default App;
