import React from 'react';
import { StyledOAuthLoginText } from './styles';
import { getAuthConstants } from '../../../util';
import { AuthProvider } from '../../../@types';

interface OAuthLoginTextProps {
    provider: AuthProvider;
    fontSize?: string;
}

const OAuthLoginText = ({
    provider,
    fontSize,
}: OAuthLoginTextProps) => {
    const authString = getAuthConstants(provider).string;

    return (
        <StyledOAuthLoginText fontSize={fontSize}>
            Continue with {authString}
        </StyledOAuthLoginText>
    );
};

export default OAuthLoginText;
