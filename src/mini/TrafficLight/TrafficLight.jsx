import { useEffect } from "react";
import { useState } from "react";

import "./index.css";

export default function TrafficLight(props){
    const [signal, setSignal] = useState(props.startingLight);
    let sequenceOn = true;
    const goTimer = 3;
    const slowTimer = 1;
    const stopTimer = 2;

    const handleSignalChange = function(){
        
    }
    const sleep = function(secs, callback){
        setTimeout(()=>{},secs*1000)
    }
    const go = () =>{
        return new Promise(function(resolve, error){
            setSignal("go");
            setTimeout(()=>{
                resolve(true)
            },goTimer*1000)
            
        });
    }
    const slowdown = () =>{
        return new Promise(function(resolve, error){
            setSignal("slow");
            setTimeout(()=>{
                resolve(true)
            },slowTimer*1000)
        });
    }
    const stop = () =>{
        return new Promise(function(resolve, error){
            setSignal("stop");
            setTimeout(()=>{
                resolve(true)
            },stopTimer*1000)
        });
    }

    const start = function(){
        console.log("--started the traffic light sequence");
        if(props.startingLight === "go"){
            console.log("Triggering Go Light!");
            go().then(function(val){
                console.log("Triggering Slow Light");
                return slowdown();
            })
            .then(function(val){
                console.log("Triggering Stop Light");
                return stop();
            })
            .then(function(val){
                    console.log("--sequence is done!");
                    if(sequenceOn){
                        start();//recursive sequence
                    }else{
                        alert("sequence has been stopped!");
                    }
                    
            })
          
        }
    }

    useEffect(function(){
        console.log("Starting Traffig Lightt Sequence!!");
        start();
        return ()=>{
            //handle traffic light timers here...
        }
    },[])
    
    return(
        <div className="tl-container">
            <div className="tl-light-container" >
                <Light className={"tl-light".concat((signal === "stop" ? " stop": ""))}></Light>
            </div>
            <div className="tl-light-container">
                <Light  className={"tl-light".concat((signal === "slow" ? " slow": ""))}></Light>
            </div>
            <div className="tl-light-container" >
                <Light className={"tl-light".concat((signal === "go" ? " go": ""))}></Light>
            </div>
        </div>
    )
}
export function Light(props){
    const [isOn, setIsOn] = useState(false);
    
    const ligthHandler = () => {
        setIsOn(!isOn);
    }

    return(
        <div className={props.className}>
            <div className={props.className}>

            </div>
        </div>
    )
}