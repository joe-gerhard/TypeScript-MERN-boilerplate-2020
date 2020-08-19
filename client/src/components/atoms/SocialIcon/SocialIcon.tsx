import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { StyledIcon } from './styles';
import { getAuthConstants } from '../../../util';
import { AuthProvider } from '../../../@types';

interface SocialIconProps {
    provider: AuthProvider;
    fontSize?: string;
}

const SocialIcon = ({ provider, fontSize }: SocialIconProps) => {
    let icon = getAuthConstants(provider).icon;
    return (
        <StyledIcon fontSize={fontSize}>
            <FontAwesomeIcon icon={icon} />
        </StyledIcon>
    );
};

export default SocialIcon;
