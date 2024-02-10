export default function Button1(props){

    return(
       <button className="bg-cyan-400 rounded-lg text-3xl p-3 m-2 text-white hover:bg-cyan-800 hover:font-semibold h-16 w-40 focus:ring active:bg-cyan-800" onClick={()=>{props.onClick()}}>{props.x}</button>
    );

}