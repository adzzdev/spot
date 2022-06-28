import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom"

import PrivateRoute from './components/Route/PrivateRoute';
import PublicRoute from "./components/Route/PublicRoute";
import { AppDataProvider } from './contexts/AppDataContext';

import HookMain from "./lrn-hooks";
import HookDetail from "./lrn-hooks/details";
import ContextMain from "./contexts";

import About from './pages/About';
import Staging from './pages/Staging';
import ComponentIndex from './pages/Component';
import RegisterIndex from './pages/Register';

import MiniHome from './mini/MiniHome';
import MiniDetail from "./mini/MiniDetail"
import BlogIndex from './pages/Blog';
import BlogDetails from './blog/BlogDetails';

import ShowcaseFactory from './components/__module/ShowcaseFactory';
import Dashboard from './pages/Dashboard';
import UserProfile from './pages/UserProfile';
import { AuthProvider } from './contexts/AuthenticationContext';



export default function Application(props) {
    return(
        <>
            <Router>
                <AppDataProvider>
                    <AuthProvider>
                        <Routes>
                            <Route exact path="/" element={<Navigate to="blog"></Navigate>}></Route>
                            <Route exact path="register" element={<RegisterIndex></RegisterIndex>}></Route>
                            
                            {/* public routing with layout */}
                           <Route exact path="/" element={<PublicRoute></PublicRoute>}>
                                <Route path="about" element={<About/>}></Route>
                                <Route path="blog" element={<BlogIndex/>}></Route>
                                <Route path="blog/:id" element={<BlogDetails></BlogDetails>}></Route>
                                <Route exact path="*" element={<div className='container'><div className='mt-4'><p>Page cannot be found.</p></div></div>}></Route>
                           </Route>

                            {/* private routing with layout */}
                            <Route exact path="app" element={<PrivateRoute></PrivateRoute>}>
                                {/* <Route path="topics">
                                    <Route exact path="hooks" element={<HookMain/>}></Route>
                                    <Route path="hooks/:title" element={<HookDetail/>}></Route>
                                    <Route path="contexts" element={<ContextMain/>}></Route>
                                </Route> */}

                                <Route path="mini" element={<MiniHome></MiniHome>}></Route>
                                <Route path="mini/:path" element={<MiniDetail/>}></Route>

                                <Route path="component" element={<ComponentIndex/>}></Route>
                                <Route path="component/infobox" element={<ShowcaseFactory componentPath="infobox"></ShowcaseFactory>}></Route>
                                
                                <Route path="dashboard" element={<Dashboard/>}></Route>

                                <Route path="user/:username" element={<UserProfile/>}></Route>

                                <Route path="staging" element={<Staging/>}></Route>
                            </Route>
                        </Routes>
                    </AuthProvider>
                </AppDataProvider>
            </Router>
        </>
    );
}
