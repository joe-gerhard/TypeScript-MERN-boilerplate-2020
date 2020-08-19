import styled, { css } from 'styled-components';

interface StyledAuthButtonProps {
    color: string;
}

export const StyledAuthButton = styled.a(
    ({ color }: StyledAuthButtonProps) => css`
        display: flex;
        align-items: center;
        background: ${color};
        border-radius: 6px;
        width: 300px;
        height: 40px;
        color: white;
        font-family: sans-serif;
        padding: 0 17px;
        text-decoration: none;
        margin: 10px;
    `,
);
