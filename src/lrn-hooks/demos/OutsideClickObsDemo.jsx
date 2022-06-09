import { useRef, useState} from "react";
import useOutsideClickObserver from "../hooks/useOutsideClickObserver";
import OutsideClickObserver from "../../components/OutsideClickObserver"

/**
 * Component that alerts if you click outside of it
 */
 export default function OutsideClickObsDemo(props) {
      const [message, setMessage] = useState("Click here...")
      return(
          <div className="card card-secondary"> 
            <div className="card-header">
              Outer Card
            </div>
            <div className="card-body">
              <OutsideClickObserver outsideClickHandler={(isClicked, event)=>{
                  if(isClicked){
                    setMessage("Clicked outside.")
                  }else{
                    setMessage("Clicked inside.")
                  }
              }}>
                <div className="card card-primary"> 
                  <div className="card-header">
                    Inner Card
                  </div>
                  <div className="card-body">
                    <div className="d-flex justify-content-center align-content-center">
                      <h3>{message}</h3>
                    </div>
                  </div>
              </div>
            </OutsideClickObserver>
            </div>
          </div>
      )
  }