import styled, { css } from 'styled-components';

interface StyledOAuthLoginTextProps {
    fontSize?: string;
}

export const StyledOAuthLoginText = styled.div(
    ({ fontSize }: StyledOAuthLoginTextProps) => css`
        font-family: 'Roboto', sans-serif;
        font-size: ${fontSize || '16px'};
    `,
);
