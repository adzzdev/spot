import React from 'react'
import LocalStorageDemo from './LocalStorageDemo';
import SessionStorageDemo from './SessionStorageDemo';
import OutsideClickObsDemo from './OutsideClickObsDemo';

export default function DemoFactory(props) {
    let component = <p>Nothing to show here...</p>;
    switch(props.title){
        case "useLocalStorage":{
            component = (<LocalStorageDemo></LocalStorageDemo>)
        }break;

        case "useSessionStorage":{
            component = (<SessionStorageDemo></SessionStorageDemo>)
        }break;

        case "useOutsideClickObserver":{
            component = (<OutsideClickObsDemo detail={props.detail}></OutsideClickObsDemo>)
        }break;
    }

    return component;
}
