import React from 'react'

export const Navbar = () => {
  return (
    <div>
         <nav className="navbar">
      <h2 className="logo">MyApp</h2>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
    </ul>
    </nav>
    </div>
  )
}
