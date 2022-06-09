import React from 'react'
import { useState } from 'react';
import { useRef } from 'react'
import useSessionStorage from '../hooks/useSessionStorage';

export default function SessionStorageDemo() {

    const emailRef = useRef();
    const usernameRef = useRef();

    const [content, setContent] = useState(JSON.stringify(sessionStorage));
    const [email, setEmail] = useSessionStorage("email","");
    const [username, setUsername] = useSessionStorage("username","");

    /**
     * 
     * 20220519: Not a reactive way of doing this.
     * - We have to manage a state in the useEffect in the useLocalStorage hook to be able to rerender after applying the effects.
     * - But since the implementation here is to use effect for each field, its kind of ugly to pass separte state handlers to the custom hook.
     */
    document.addEventListener("appSessionStorageChanged",function(e){
        setContent(JSON.stringify(sessionStorage));
        console.log((e));
    });

  return (
      <div className='row'>
        <div className='col-xl-6 mt-1 mt-xl-0'>
            <div className='card'>
                <div className='card-header'>
                   Form
                </div>
                <div className='card-body'>
                    <form>
                        <div class="form-group mb-3">
                            <label for="exampleInputEmail1">Email address</label>
                            <input ref={emailRef} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Username</label>
                            <input ref={usernameRef} type="text" class="form-control" id="exampleUsername" placeholder="Username"/>
                        </div>

                        <button type="submit" class="btn btn-primary mt-3" onClick={(e)=>{
                            e.preventDefault();
                            setEmail(emailRef.current.value);
                            setUsername(usernameRef.current.value);
                        }}>Save to Local Storage</button>
                    </form>    
                </div>
            </div>
        </div>
        <div className='col-xl-6  mt-1 mt-xl-0'>
            <div className='row'>
            {/* <div className='col-12'>
                <div className='card'>
                    <div className='card-header'>
                        Local Storage Manual
                    </div>
                    <div className='card-body'>
                        {content}
                        <hr></hr>
                        <buton className="btn btn-primary" onClick={(e)=>{
                            e.preventDefault();
                            setContent(JSON.stringify(localStorage));
                        }}>Fetch Local Storage</buton>
                    </div>
                </div>
            </div> */}
            <div className='col-12 mt-1'>
                <div className='card'>
                    <div className='card-header'>
                        Session Storage
                    </div>
                    <div className='card-body'>
                        {content}
                    </div>
                </div>
            </div>
            </div>
            
        </div>
      </div>
   
  )
}
