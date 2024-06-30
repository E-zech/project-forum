import React from 'react';
import { useContext } from 'react';
import { GeneralContext } from '../../App';
import './Navbar.css'
import { Link } from 'react-router-dom'
import { pages, checkPermissions } from '../../utils';


export default function Navbar() {
    const { user, setUser, userRoleType, setUserRoleType } = useContext(GeneralContext);

    return (
        <nav className="navbar">
            <span className='nav-logo'><Link to={'/'}>Logo</Link></span>
            <ul className='nav-ul'>
                {pages.filter(p => !p.permissions || checkPermissions(p.permissions, userRoleType)).map(p => (
                    <Link key={p.route} to={p.route}
                        className='nav-li'>
                        {p.title}
                    </Link>
                ))}
            </ul>
        </nav>
    );
}


