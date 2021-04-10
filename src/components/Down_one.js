
export function Down(props){
    return(
        <div className= 'alert2'>
        <span onClick={()=>alert("close!")} ><button class="closebtn" >&times;</button></span>
        <strong>Alert!</strong>
        <h4>Welcome {props.name}</h4>
        </div>
    )
}