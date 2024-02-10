import { useState,useEffect } from "react";

import Button1 from "./componenets/Button1";

export default function Memo(){
    const [x,setx]=useState('Kumaran');
    const [j,setj]=useState(0);
    const y=x==='Kumaran'?true:false;
    const [s,sets]=useState(0);
    
    useEffect(()=>{
        sets(s=>s+1);
    },[y])

    function stesk(){
        setx('Kumaran')
        
    }
    function setsk2(){
        setx('kumaran2')
       
    }
    function add(){
        setj(j+1)
    }

    

    return(
        <div className="flex h-screen justify-center items-center text-3xl flex-col gap-6">
            <section>
              Welcome {x}
            </section>
            <section>
               <Button1 x="setkumaran" onClick={stesk}/>
               <Button1 x='setkumaran2' onClick={setsk2}/>
               <Button1 x='add' onClick={add}/>
            </section>
            value changes {s} times
            
        </div>
    );
}