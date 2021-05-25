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
        return (
            <Section>
                Account Balance:{this.props.amount}               
            </Section>
        );
    }
}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
};