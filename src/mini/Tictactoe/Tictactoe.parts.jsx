import React, { Component, useState } from "react";
import styled from "styled-components";

const DEFAULT_CELLS_STATES = [false, false, false, false, false, false, false, false, false];

const StyledBoard = styled.div`
  width: 300px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(3, 100px);
  grid-gap: 3px 3px;
  margin-left: 5px;
`;


export function Board(props) {
  return (
    <StyledBoard className={props.className}>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
    </StyledBoard>
  );
}

export function Cell(props) {
  const [active, setActive] = useState(false);

  function handleClickEvent() {
    setActive(!active);
  }

  const StyledCell = styled.div`
      border: 1px solid black;
      background-color: ${active ? "lightgreen" : ""};
    `;
  return <StyledCell onClick={handleClickEvent}></StyledCell>;
}


export function BoardB(props) {
  const [cellStates, setCellStates] = useState(DEFAULT_CELLS_STATES)

  function handleClickEvent(index) {
    const newCellState = cellStates;
    newCellState[index] = !newCellState[index];
    setCellStates(newCellState);
  }

  return (
    <StyledBoard className={props.className}>
      <CellB clickHandler={() => handleClickEvent(1)} isActive={cellStates[1]} ></CellB>
      <CellB clickHandler={() => handleClickEvent(2)} isActive={cellStates[2]} ></CellB>
      <CellB clickHandler={() => handleClickEvent(3)} isActive={cellStates[3]} ></CellB>
      <CellB clickHandler={() => handleClickEvent(4)} isActive={cellStates[4]} ></CellB>
      <CellB clickHandler={() => handleClickEvent(5)} isActive={cellStates[5]} ></CellB>
      <CellB clickHandler={() => handleClickEvent(6)} isActive={cellStates[6]} ></CellB>
      <CellB clickHandler={() => handleClickEvent(7)} isActive={cellStates[7]} ></CellB>
      <CellB clickHandler={() => handleClickEvent(8)} isActive={cellStates[8]}></CellB>
      <CellB clickHandler={() => handleClickEvent(9)} isActive={cellStates[9]} ></CellB>
    </StyledBoard>
  );
}
export function CellB(props) {
  const StyledCell = styled.div`
    border: 1px solid black;
    background-color: ${props.isActive ? "lightgreen" : ""};`

  return (
    <StyledCell onClick={props.clickHandler}></StyledCell>
  )
}



