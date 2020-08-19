import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getUser } from '../store/actions/user/userActions';

export const useCheckForUser = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);
};
