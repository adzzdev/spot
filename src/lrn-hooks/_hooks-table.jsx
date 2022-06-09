import React from 'react'
import { Link } from 'react-router-dom';

export default function _hookstable(props) {

  if(!props.header && !props.data){
    return (
      <p className="">No thing to show here...</p>
    )
  }

  const tableHeads = props.header.map(function(item, index){
      return(
        <th key={index} scope="col">{item}</th>
      )
  });

  const tableHeader = <tr>{tableHeads}</tr>
  
  const tableRecords = props.data.map(function(item, index){
    return(
      <tr key={index}>
          <td scope="col">{item["dateCreated"]}</td>
          <td scope="col">{item["author"]}</td>
          <td scope="col">{item["title"]}</td>
          <td scope="col">{item["description"]}</td>
          <td scope="col">{<Link to={item["title"]}>{item["title"]}</Link>}</td>
      </tr>
    )
  });

  return (
    <>
      <table class="table table-striped table-hover">
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

/**
 * TODO:
 * This can be converted to global component - Table
 */