
import {Down} from './Down_one'

export function Top(props){
    return(
        <div>
        <div className= 'alert'>
        <span onClick={()=>alert("close!")} ><button class="closebtn" >&times;</button></span>
        <strong>Alert!</strong>
        <h3>Welcome! {props.name}</h3>
        </div>
        <br/>
        <Down name={<b>To a new begining</b>}/>
        </div>
    )
}