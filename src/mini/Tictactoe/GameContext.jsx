import React, { useContext } from 'react'

const GameContext = React.createContext();

export default function GameContextProvider(props) {
  return (
    <GameContext.Provider value={{}}>
        {props.children}
    </GameContext.Provider>
  )
}
