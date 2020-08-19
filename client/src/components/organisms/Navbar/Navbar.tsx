import React from 'react';

import { StyledNavbar } from './styles';
import { NavbarLink, LogoutLink } from '../../atoms/Links';
import { useSelector } from 'react-redux';
import { selectUserIsLoggedIn } from '../../../store/selectors';

const Navbar = () => {
    const isLoggedIn = useSelector(selectUserIsLoggedIn);

    return (
        <StyledNavbar>
            <NavbarLink to="/">Home</NavbarLink>
            {isLoggedIn && (
                <NavbarLink to="/profile">Profile</NavbarLink>
            )}
            {!isLoggedIn && (
                <NavbarLink to="/login">Login</NavbarLink>
            )}
            {isLoggedIn && <LogoutLink />}
        </StyledNavbar>
    );
};

export default Navbar;
