import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom"

import Topbar from "./components/Topbar/Topbar"

import HookMain from "./lrn-hooks";
import HookDetail from "./lrn-hooks/details";
import ContextMain from "./contexts";
import MiniHome from './mini/MiniHome';
import MiniDetail from "./mini/MiniDetail"
import { AppDataProvider } from './contexts/AppDataContext';
import BlogHome from './blog/BlogHome';
import BlogDetails from './blog/BlogDetails';
import About from './pages/About';
import Staging from './pages/Staging';
import ComponentIndex from './pages/Component';


export default function Application(props) {
    return(
        <>
            <Router>
                <Topbar/>
                <div className='container mb-4'>
                    <AppDataProvider>
                        <Routes>
                            <Route exact path="/" element={<Navigate to="blog"></Navigate>}></Route>
                            
                            {/* <Route path="topics">
                                <Route exact path="hooks" element={<HookMain/>}></Route>
                                <Route path="hooks/:title" element={<HookDetail/>}></Route>
                                <Route path="contexts" element={<ContextMain/>}></Route>
                            </Route> */}

                            <Route path="mini" element={<MiniHome></MiniHome>}></Route>
                            <Route path="mini/:path" element={<MiniDetail/>}></Route>

                            <Route path="blog" element={<BlogHome/>}></Route>
                            <Route path="blog/:id" element={<BlogDetails></BlogDetails>}></Route>

                            <Route path="component" element={<ComponentIndex/>}></Route>
                            <Route path="component/:name" element={<div className='display-6 mt-4'>Component Details JSX here.</div>}></Route>

                            <Route path="about" element={<About/>}></Route>
                            
                            <Route path="staging" element={<Staging/>}></Route>
                            <Route exact path="*" element={<div className='mt-4'><p>Page cannot be found.</p></div>}></Route>
                        </Routes>
                    </AppDataProvider>
                </div>
            </Router>
        </>
    );
}
