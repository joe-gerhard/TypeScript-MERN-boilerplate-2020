import styled, { css } from 'styled-components';

interface StyledIconProps {
    fontSize?: string;
}

export const StyledIcon = styled.div(
    ({ fontSize }: StyledIconProps) => css`
        font-size: ${fontSize || '16px'};
        width: 50px;
    `,
);
