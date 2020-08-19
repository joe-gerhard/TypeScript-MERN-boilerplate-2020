import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNavbarLink = styled(Link)`
    text-decoration: none;
    color: blue;
    margin: 10px;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;

    &:hover {
        cursor: pointer;
    }
`;
