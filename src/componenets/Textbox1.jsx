
export default function Textbox1(props){

    return(
        <input type="text" className="border-2 border-cyan-400 p-2 m-3" placeholder={props.placeholder} onChange={(e)=>{props.onchange(e)}}></input>
    );
}