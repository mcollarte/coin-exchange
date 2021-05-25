//type rcc to setup the code for the component
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Td = styled.td`
    border: 1px solid #cccccc;
    width: 25vh;
`;

export default class Coin extends Component {
    constructor(props){
        super(props);
        this.state={
            price: this.props.price
        };
        //any class function that will be used to update the componente needs to be bound to the context of the component
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        //Prevent the page from reloading because this will remount component and reset initial values
        event.preventDefault();
        const randomPercentage  = 0.995 + Math.random()*0.01;
        this.setState((oldState)=>{
             return {
                price: oldState.price * randomPercentage
             };
        });
    }
    render() {
        return (
            <tr>
                <Td>{this.props.name}</Td>
                <Td>{this.props.ticker}</Td>
                <Td>${this.state.price}</Td>
                <Td>
                    <form action="#" method="POST">
                        <button onClick ={this.handleClick}>Refresh</button>
                    </form>
                </Td>
            </tr>                 
        )
    }
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};