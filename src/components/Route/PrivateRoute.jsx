import React from "react"
import { Nav } from "react-bootstrap";
import { Route, Navigate, Outlet, useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "../../contexts/AuthenticationContext";

import Topbar from "../Topbar";



export default function PrivateRoute(props){
  //required to pass the props since we are encapsulating the main function in this default function
  return PrivateWrapper(props);
}
/**
 * 04/14/2022 - This pattern is not working on the current react-router-dom version 
 */
function PrivateRouteA({ component: Component, ...rest }) {
  const { currentUser } = useAuth();
  return (
    <Route
      {...rest}
      render={props => {
        return currentUser ? <Component {...props} /> : <Navigate to="/login" />
      }}
    ></Route>
  )
}
/**
 * 04/14/2022 - Normal function approach, still same as the above so this will not work still.
 */

export function PrivateRouteB({ component: Component}) {
  const { currentUser } = useAuth();
  if(currentUser){
    return Component;
  }else{
    return <Navigate to="/login"></Navigate>
  }
}

/**
 * 04/14/2022:
 * This approach is working BUT, based on this article:
 * https://stackoverflow.com/questions/69923420/how-to-use-private-route-in-react-router-domv6
 * this approach does not handle the Route Nesting, which results to the usage of the next Private Route
 * 
 * Usage: 
 * <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}/>
 */

export function PrivateRouteC(props){
  const { currentUser } = useAuth();
  console.log(currentUser);
  return (currentUser ? props.children : <Navigate to="/login"/>)
}

/**
 * 04/14/2022:
 * As per the comment, above this is a route that will enable us to utilize the <Outlet/> component
 * 
 * Usage: 
 * <Route element={<PrivateWrapper />}><Route path="/dashboard" element={<Dashboard />} /></Route>
*/
const PrivateWrapper = (props) => {
  const { currentUser } = useAuth();  
  const path = useLocation().pathname;
  
  if(path==="/app" || path==="/app/"){
    return <Navigate to="/app/dashboard"/>
  }else{
    return (
      currentUser ?  
      (<>
        <Topbar></Topbar>
        <Outlet />
        </>
      ): <Navigate to="/register" />);  
  }
      
};