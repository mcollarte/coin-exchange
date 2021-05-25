import React, { Component } from 'react';
import Coin from './Coin.js';
import styled from 'styled-components';

const Table = styled.table`
    margin: 50px auto 50px auto;
    align-content:  center;
    display: inline-block;
    font: 2rem;
`;

export default class CoinList extends Component {
    render() {
        return (
            <Table >
            <thead>
              <tr>
                <th>Name</th>
                <th>Ticker</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody >
              {/* This is a JS function called map which simplifies rendering components as a list */}
              {this.props.coinData.map(value => 
                <Coin key={value.ticker}name={value.name} ticker = {value.ticker} price={value.price} />
              )}
            </tbody>
          </Table>
        )
    }
}
