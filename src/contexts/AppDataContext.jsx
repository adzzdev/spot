import React from 'react'
import { useContext } from 'react';
import topicsData from "../assets/data/topics.json";
import miniData from "../assets/data/mini.json";
import blogData from "../assets/data/blog.json";

const APP_DATA = {
  topicsData: topicsData,
  miniData: miniData,
  blogData: blogData
}
export const AppDataContext = React.createContext({});

export function AppDataProvider(props) {
  //context data processing here...

  return (
    <AppDataContext.Provider value={APP_DATA}>
        {props.children}
    </AppDataContext.Provider>
  )
}
