import React from 'react'
import InfoBoxShowcase from '../InfoBox/InfoBoxShowcase'

export default function ShowcaseFactory({componentPath}) {
  let component = <p>Nothing to show here...</p>
  
  switch(componentPath){
    case "infobox":{
        component = <InfoBoxShowcase></InfoBoxShowcase>
    }break;
  }

  return component;
}
