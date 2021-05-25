import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';

const Header = styled.header`
  background-color: #282c34;
  min-height: 20vh;
  display: flex;
  flex-direction: row; /* puts div and image in the same row*/
  align-items: center;
  justify-content: center;
  color: white;
`;
const H1 = styled.h1`
  font-size: 6rem;
`;
const Img = styled.img`
  height: 8rem;
  pointer-events: none;
`;



export default class ExchangeHeader extends Component {
    render() {
        return (
            <Header className="App-header">
            <Img src={logo} alt="React Logo"  />
            <H1 className ="App-header">
              Coin Exchange
            </H1>
          </Header>
        )
    }
}
