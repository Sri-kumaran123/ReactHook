import React from "react";

export default function Heading(){

    const data=[
        {name:'Home',link:'/home'},
        {name:'Home2',link:'/home'},
        {name:'Home3',link:'/home'},
        {name:'Home4',link:'/home'},
        {name:'Home5',link:'/home'},
    ]
    return(
            <header className="bg-cyan-400 h-24 flex items-center px-9 justify-between text-white">
                <span className="mx-9">
                    <h1 className="text-4xl font-bold">React Hooks</h1>
                </span>
                <span className="mx-9">

                    <Nav nav={data}/>
                </span>

            </header>

    );
}

function Nav(props){

    function list(x,y){
        return <li className="mx-5 font-semibold text-xl ">{x}</li>
    }
    return(
        <nav>
            <ul className="flex flex-row ">
                {props.nav.map(x=>{
                  return list(x.name,x.link);
                })}
            </ul>
        </nav>
    );
}