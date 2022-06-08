import { NavLink, Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <header>
            <NavLink to='/' className='Navigation-link'
                    activeClassName='Navigation-link-active'>Home</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
                <NavLink to='/about'>About </NavLink>
                <NavLink to='/phonebook'>PhoneBook </NavLink>
                <NavLink to='/modal'>ModalWindow </NavLink>
                <NavLink to='/clock'>Clock </NavLink>
                <NavLink to='/tabs'>Tabs </NavLink>
                <NavLink to='/request'>Request </NavLink>
            </header>


            <main className='container'>
                <Outlet />
            </main>

        </>
    )
}

export { Layout };