import React, {useState , useEffect} from 'react';
import CoinList from './Components/CoinList.js';
import AccountBalance from './Components/AccountBalance.js'
import ExchangeHeader from './Components/ExchangeHeader';
import styled from 'styled-components';
import axios from 'axios';

const Div = styled.div`
text-align: center;
background-color: #26067e;
color: #cccccc;
`;

//Define # of coins to be displayed
const COIN_NUMBER = 10;
//utility function
const formatPrice = (price) => parseFloat(Number(price).toFixed(4));

function App (props) {

  const [balance, setBalance] = useState(100000);
  const [showBalance, setShowBalance] = useState(true);
  const [coinData, setCoinData] = useState([]);

  const componentDidMount = async() =>{
    const coins = await axios.get('https://api.coinpaprika.com/v1/coins');
    const coinIds = coins.data.slice(0,COIN_NUMBER).map(coin => coin.id);
    const tickerUrl = 'https://api.coinpaprika.com/v1/tickers/';
    const coinPromises = coinIds.map( id => axios.get(tickerUrl+id));
    const coinInfo = await Promise.all(coinPromises);
    let coinList = coinInfo.map(response=>{
        const coin = response.data;
        return{
          key: coin.id,
          name: coin.name,
          ticker: coin.symbol,
          balance: 0,
          price: formatPrice(coin.quotes.USD.price)
        };
      });    
      setCoinData(coinList);
  }

  //the useEffect function will run every time our component mounts or is updated therefore
  //we need to write our code inside it to recognize each situation
  useEffect( () =>{
    if(coinData.length ===0)
      componentDidMount();

  })

  

  const handleRefresh = async (changedKeyValue) =>{
    const tickerUrl = 'https://api.coinpaprika.com/v1/tickers/';
    const coinInfo = await axios.get(tickerUrl+changedKeyValue);
    const newCoinInfo= formatPrice(coinInfo.data.quotes.USD.price);
    const newCoinPrices = coinData.map((values) => {
      if(values.key === changedKeyValue){
            values.price = newCoinInfo;
      } 
      return values; 
    });
    setCoinData( newCoinPrices);
  }

  const handleShowBalance = (balanceDisplay) =>{
    setShowBalance(!showBalance);
  }

  return (
    <Div>
      <ExchangeHeader />
      <AccountBalance 
          amount={balance} 
          showBalance ={showBalance} 
          handleShowBalance = {handleShowBalance}/>
      <CoinList 
          coinData={coinData} 
          showBalance = {showBalance} 
          handleRefresh={handleRefresh} />
    </Div>
  );

}

export default App;
