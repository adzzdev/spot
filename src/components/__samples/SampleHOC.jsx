import React from 'react'

export default function SampleHOC() {
  return (
    <div>SampleHOC</div>
  )
}


/**
 * Higher Order Components:
 * - Take note that you should define the CUSTOM props in the actual usage of the COMPONENT.
 * - All props should be default for the usage of the HOC, in our example here, I tried to put a default onclick in the button which feels unright
 * -- since we should define it in the usage of our HOC instead of the component that the HOC uses.
 */

function SampleButton(props){
    return(
        <button {...props}>
           {props.children}
        </button>
    )
}

function buttonHOC(Component){
    const buttonStyles = {
        backgroundColor: '#61dbfb',
        padding: '10px 25px',
        border: 'none',
        borderRadius: 5,
        margin: 3,
        cursor: 'pointer',
        fontSize: 18,
        color: 'white',
    }
    return (props) => {
        return (
            <Component {...props} style={buttonStyles} >
                {props.children}
            </Component>
        );
    }
}

export const SampleButtonHOC = buttonHOC(SampleButton);

