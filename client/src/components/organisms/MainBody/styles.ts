import styled from 'styled-components';
import { navbarHeight } from '../../../styles/constants';

export const StyledMainBody = styled.main`
    display: flex;
    font-family: 'Open Sans', Arial;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    height: calc(100vh - ${navbarHeight});
`;
