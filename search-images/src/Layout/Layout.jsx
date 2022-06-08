import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <header>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/rest'>Vebinar</NavLink>
                <NavLink to='/searchImages'>SearchImages</NavLink>
            </header>

            <main>
                <Outlet />
            </main>
        </>
    )
}

export { Layout };