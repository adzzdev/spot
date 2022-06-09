import React from 'react'
import DefaultTable from "./DefaultTable"

export default function TableFactory(props) {
  /**
   * Required parameters: data, header
   */
  let table = <></>
    switch(props.name){
        case "default":{
            table = <DefaultTable className={props.className ?? ""} data={props.data} header={props.header} ignoredAttributes={props.ignoredAttributes}/>
        }break;
    }

  return table;
}
