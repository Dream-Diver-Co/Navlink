import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Rootlayout() {
  return (
    <div className="root-layout">
        <header>
            <nav>
                <h1>
                Learning Router
                </h1>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='about'>About</NavLink>
            </nav>
    </header>
    <main>
        <Outlet />
    </main>


    </div>
  )
}
