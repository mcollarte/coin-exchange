//type rcc to setup the code for the component
import React, { Component } from 'react';
import './Coin.css';
import PropTypes from 'prop-types';




export default class Coin extends Component {
    constructor(props){
        super(props);
        this.state={
            price: this.props.price
        };
        //any class function that will be used to update the componente needs to be bound to the context of the component
        this.handleClick = this.handleClick.bind(this);
    }
    // componentDidMount(){
    //     const callback = () =>{
    //         const randomPercentage  = 0.995 + Math.random()*0.01;
    //         this.setState((oldState)=>{
    //             return {
    //                 price: oldState.price * randomPercentage
    //             };
    //         });
    //     }
    //     setInterval(callback, 1000);
    // }
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
            <tr className="coin-row">
                <td>{this.props.name}</td>
                <td>{this.props.ticker}</td>
                <td>${this.state.price}</td>
                <td>
                    <form action="#" method="POST">
                        <button onClick ={this.handleClick}>Refresh</button>
                    </form>
                </td>
            </tr>                 
        )
    }
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};