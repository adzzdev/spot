import React from 'react'
import TrafficLigth from "./TrafficLight/TrafficLight"
import Tictactoe from './Tictactoe/Tictactoe'

export default function DemoFactory(props) {
    let component = <p>Nothing to show here...</p>

    switch (props.title) {
        case "trafficlight":{
            component = <TrafficLigth startingLight ="go"></TrafficLigth>
        }break;
        case "tictactoe":{
          component = <Tictactoe></Tictactoe>
        }break;
        case "battleship":{
          
        }
    }
  return (
    component
  )
}
