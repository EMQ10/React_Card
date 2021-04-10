// export function Welcome(props){
//     return(
//         <h1>hello {props.name}</h1>
//     ) 
// }
import React from "react";
import logo from '../logo.svg';
import {Top} from './Top_one'


export default class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }
    render(){
        return (
        
            <div className="body">
                <div className="card">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <div class="container">
                    <h1>This is a hungry man's Card</h1>
                    <Top name={<b> This is Red</b>}/>
                    </div>
                </div>
            </div>    
    
        )
    }
}