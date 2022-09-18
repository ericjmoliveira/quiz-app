import styled from 'styled-components';

import topBlob from '../assets/top-blob.png';
import bottomBlob from '../assets/bottom-blob.png';
import { colors } from './Global';

export const Container = styled.main`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: url(${topBlob}) no-repeat top right, url(${bottomBlob}) no-repeat bottom left;
    background-color: ${colors.background};
    padding: 2rem;

    h2 {
        color: ${colors.primary};
    }
`;
