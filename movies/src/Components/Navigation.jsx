import { NavLink } from 'react-router-dom';
import routes from '../routes';

export default function Navigation() {
    return (
        <ul>
            <li>
                <NavLink
                    to={routes.home}
                    exact
                    className='Navigation-link'
                    activeClassName='Navigation-link-active'
                >
                    Home
                </NavLink>
            </li>

            <li>
                <NavLink
                    to={routes.movies}
                    exact
                    className='Navigation-link'
                    activeClassName='Navigation-link-active'
                >
                    Movies
                </NavLink>
            </li>
        </ul>
    )

}