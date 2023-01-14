import React, {Component} from 'react';
import {data} from './reques';

import './main.css';

class Main extends Component {
    state = {allCurrency: null}
componentDidMount() {
    data('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
    .then((data1)=>{this.setState(({allCurrency}) => {
       return {
        allCurrency: data1
       } //return new object
    })});
}
render() {
    console.log(this.state.allCurrency)
    // first way to create requset
    /*let promise = fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
    promise.then((data) => {return data.json()})
    .then((data1) => {console.log(data1)})*/
    
    return (
        <>
        <header>
            <div><input type ='button' value ='1'/></div>
            <div><input type ='button' value ='2'/></div>
            <div><input type ='button' value ='3'/></div>
        </header>
        
        <section>
        
        </section>
        </>
    )
}

}



export default Main;