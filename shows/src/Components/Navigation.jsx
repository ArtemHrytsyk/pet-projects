import React from "react";
import { NavLink } from 'react-router-dom';
import routes from "../routes";

export default function Navigation() {
  return (
    <ul>
      <li>
        <NavLink
          to={routes.home}
          exact
          className='Navigation-link'
          activeClassName='Navigation-link-active'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={routes.shows}
          exact
          className='Navigation-link'
          activeClassName='Navigation-link-active'>
          Shows
        </NavLink>
      </li>
    </ul>
  )
}