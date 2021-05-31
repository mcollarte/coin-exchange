import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
    text-align: left;
    padding: 1.5rem 0rem 0rem 5rem;
    font-size: 2rem;
`;


export default function AccountBalance(props){
        return (
                <Section>
                    {props.showBalance? <>Account Balance:{props.amount}</>:<></>}
                    <button onClick={props.handleShowBalance}> {props.showBalance?'Hide Balance' : 'Show Balance'} </button>               
                </Section>
            );       
                
}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
};