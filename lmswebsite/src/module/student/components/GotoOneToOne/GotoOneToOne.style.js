import styled from "styled-components";

import {media, theme} from "../../../../style/theme/theme";

export const GotoOneToOneContainer = styled.div`
    font-family: ${theme.typography.fontFamily};
    background-color: ${theme.colors.one};
    padding: 20px;
    text-align: center;

    ${media.md`
        padding: 15px;
    `}    

    h1 {
        font-size: 24px;
        margin-bottom: 10px;
        font-family: ${theme.typography.fontFamily};
    }

    button {
        background-color: ${theme.colors.pink4};
        color: ${theme.colors.white};
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease; 
`;