import React from 'react';
import Coin from './Coin.js';
import styled from 'styled-components';

const Table = styled.table`
    margin: 50px auto 50px auto;
    align-content:  center;
    display: inline-block;
    font: 2rem;
`;

export default function CoinList (props) {

  return (
            <Table >
            <thead>
              <tr>
                <th>Name</th>
                <th>Ticker</th>
                {props.showBalance?<th>Balance</th>: <></>}
                <th>Price</th>
              </tr>
            </thead>
            <tbody >
              {/* This is a JS function called map which simplifies rendering components as a list */}
              {props.coinData.map(value => 
                <Coin key={value.key}
                      tickerId = {value.key}
                      name={value.name} 
                      ticker = {value.ticker} 
                      balance = {value.balance} 
                      price={value.price} 
                      handleRefresh = {props.handleRefresh}
                      showBalance = {props.showBalance}/>
              )}
            </tbody>
          </Table>
        )
}
