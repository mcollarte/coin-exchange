//type rcc to setup the code for the component
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Td = styled.td`
    border: 1px solid #cccccc;
    width: 25vh;
`;

export default class Coin extends Component {
    handleClick= (event)=>{
        //Prevent the page from reloading because this will remount component and reset initial values
        event.preventDefault();
        this.props.handleRefresh(this.props.ticker);
    }
    render() {
        let balanceColumn = <></>;
        
        if(this.props.showBalance){
            balanceColumn = <Td>{this.props.balance}</Td>;
            console.log(this.props.balance)
        }
            
        return (
            <tr>
                <Td>{this.props.name}</Td>
                <Td>{this.props.ticker}</Td>
                {balanceColumn}
                <Td>${this.props.price}</Td>
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