import React from 'react'
import { Link } from 'react-router-dom';

export default function DefaultTable(props) {
    if(!props.header && !props.data){
        return (
          <p className="">No thing to show here...</p>
        )
      } 

      const ignoredAttributes = props.ignoredAttributes ?? [];
      const tableHeads = props.header.map(function(item, index){
          return(
            <th key={index} scope="col">{item}</th>
          )
      });
      const tableHeader = <tr>{tableHeads}</tr>
      
      const tableRecords = props.data.map(function(item, index){
        const tdNodes = [];
        for(let attribute in item){
          if(typeof item[attribute] === "string" &&  !ignoredAttributes.includes(attribute)){
            tdNodes.push(<td scope="col">{item[attribute]}</td>);
          }else{
            switch(item[attribute]["type"]){
              case "link":{
                tdNodes.push(<td><Link to={item[attribute]["link"]}>{item[attribute]["value"]}</Link></td>)
              }break;
              default:{
                tdNodes.push(<td>{item[attribute]["value"]}</td>)
              }
            }
          }
            
        }
        return(
          <tr key={index}>
              {tdNodes}
          </tr>
        )
      });
      return (
        <>
          <table className={props.className !== "" ? props.className : "table table-striped table-hover"}>
            <thead>
                {tableHeader}
            </thead>
            <tbody>
                {tableRecords}
            </tbody>
        </table>
        </>
      );
}
