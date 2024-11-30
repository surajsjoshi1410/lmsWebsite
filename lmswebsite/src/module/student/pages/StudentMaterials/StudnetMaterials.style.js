import styled from "styled-components";
import { theme } from "../../../../style/theme/theme"; // Assuming you already have a theme defined

// Container for the entire materials section
export const MaterialContainer = styled.div`
    padding: 20px;
    background-color: ${theme.colors.seasalt};
    max-width: 100%;
    box-sizing: border-box;

    p {
        color: ${theme.colors.black};
        font-family: ${theme.typography.fontFamily};
        font-size: 1.2rem;
        margin-bottom: 20px;
    }

    .card-list {
        display: flex;
        flex-direction: column; /* Stack cards vertically */
        gap: 20px;
        width: 100%;
    }
`;

// Styles for each material card
export const MaterialCardWrapper = styled.div`
    width: 100%; /* Card takes full width of container */
    // border: 1px solid ${theme.colors.gray700};
    border-radius: 10px;
    
    overflow: hidden;
    background-color: ${theme.colors.white};
    display: flex;
    flex-direction: column; /* Ensure card content stacks vertically */
    transition: transform 0.3s ease;
&:hover {
    box-shadow: 0px 4px 10px pink;
}
    .card-header {
        background-color: ${theme.colors.seasalt};
        color: ${theme.colors.white};
        display: flex;
        justify-content: space-between; /* Align title and button on the same row */
        padding: 15px;
        font-size: 1.2rem;
        align-items: center;
    }

    .card-body {
        padding: 15px;
        text-align: left;

        p {
            color: ${theme.colors.gray700};
            font-size: 1rem;
            margin-bottom: 10px;
        }
    }

    .btn-download {
        background-color: ${theme.colors.pink6};
        color: ${theme.colors.white};
        padding: 10px 20px;
        border-radius: 5px;
        text-decoration: none;
        font-size: 1rem;
        transition: background-color 0.3s;

        &:hover {
            background-color: ${theme.colors.pink6};
        }
    }
`;
