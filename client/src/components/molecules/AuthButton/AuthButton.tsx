import React from 'react';
import { useDispatch } from 'react-redux';

import { StyledAuthButton } from './styles';
import { setUserLoading } from '../../../store/actions/user/userActions';
import { AuthProvider } from '../../../@types';
import { getAuthConstants } from '../../../util';

import SocialIcon from '../../atoms/SocialIcon';
import OAuthLoginText from '../../atoms/OAuthLoginText';

interface AuthButtonProps {
    provider: AuthProvider;
    iconFontSize?: string;
}

const AuthButton = ({ provider, iconFontSize }: AuthButtonProps) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setUserLoading());
    };

    const color = getAuthConstants(provider).color;

    return (
        <StyledAuthButton
            href={`/auth/${provider}`}
            onClick={handleClick}
            color={color}
        >
            <SocialIcon provider={provider} fontSize={iconFontSize} />
            <OAuthLoginText provider={provider} />
        </StyledAuthButton>
    );
};

export default AuthButton;
