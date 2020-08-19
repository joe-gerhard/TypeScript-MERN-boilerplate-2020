import React, { ReactNode } from 'react';
import { StyledNavbarLink } from '../styles';

interface NavbarLinkProps {
    to: string;
    children: ReactNode;
}

const NavbarLink = ({ to, children }: NavbarLinkProps) => {
    return <StyledNavbarLink to={to}>{children}</StyledNavbarLink>;
};

export default NavbarLink;
