import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
    text-align: left;
    padding: 1.5rem 0rem 0rem 5rem;
    font-size: 2rem;
`;


export default class AccountBalance extends Component {

    render() {
        const buttonText = this.props.showBalance? 'Hide Balance' : 'Show Balance';
        let content = <></>;
        if( this.props.showBalance)
            content = <>Account Balance:{this.props.amount}</>;
        return (
                <Section>
                    {content}
                    <button onClick={this.props.handleShowBalance}> {buttonText} </button>               
                </Section>
            );       
                
    }
}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
};