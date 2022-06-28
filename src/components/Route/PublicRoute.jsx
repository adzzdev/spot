import React from 'react';
import { Outlet } from 'react-router';
import Topbar from '../Topbar';

export default function PublicRoute() {
  return (
    <>
        <Topbar></Topbar>
        <Outlet />
    </>
  )
}
