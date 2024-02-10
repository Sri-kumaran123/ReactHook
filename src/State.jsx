import React from "react";
import { useState } from "react";
import Button1 from "./componenets/Button1";

export default function State(){

    const [data,setdata]=useState();
    const [d1,setd1]=useState([]);

    function forchange(e){
        setdata(e.target.value)
    }
    function forclick(){
        setd1(
            [...d1,data]
        )
        setdata();
       
    }
    
    return(
        <>
            <div className="h-screen flex flex-col justify-center items-center gap-8">
            <section className="text-9xl mb-6 text-cyan-600 font-semibold">
                {data?`Welcome ${data}`:'demo'}
                </section>
                <section className="flex flex-row items-center gap-8">
                    <label className="text-4xl">Enter Text</label>
                    <input className="p-3 border-2 m-2 rounded-md border-cyan-400 w-50 text-3xl" onChange={forchange}  type="text" placeholder="Enter some"/>
                </section>
                <section>
                    <Button1 x={"click me"} onClick={forclick}/>
                </section>
                <section>
                    {d1?d1.map(x=><>{`Added ${x} `}<br></br></>):''}
                </section>
                
            
            </div>
           
        </>
    );
}