import React, { Dispatch } from 'react';
import axios from 'axios';

import { StyledNavbarLink } from '../styles';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AnyAction } from '../../../../store/actions';

const LogoutLink = () => {
    const history = useHistory();
    const dispatch = useDispatch<Dispatch<AnyAction>>();

    const handleClick = async (): Promise<void> => {
        await axios.get('/auth/logout');
        dispatch({
            type: 'LOGOUT',
        });
        history.push('/');
    };

    return (
        <StyledNavbarLink as="a" onClick={handleClick}>
            Logout
        </StyledNavbarLink>
    );
};

export default LogoutLink;
