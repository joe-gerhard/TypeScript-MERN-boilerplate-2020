import React, { ReactNode } from 'react';
import { StyledMainBody } from './styles';

interface MainBodyProps {
    children: ReactNode;
}

const MainBody = ({ children }: MainBodyProps) => {
    return <StyledMainBody>{children}</StyledMainBody>;
};

export default MainBody;
