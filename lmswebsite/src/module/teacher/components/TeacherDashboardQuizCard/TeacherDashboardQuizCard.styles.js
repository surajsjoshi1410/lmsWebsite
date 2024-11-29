import styled from "styled-components";
import {media,theme} from '../../../../style/theme/theme'
export const TeacherDashboardQuizCardwrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    border-radius: 10px;
    background-color: ${theme.colors.backgroundLight};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
        transform: translateY(-2px);
    }

    ${media.md`
        padding: 15px;
    `}

    ${media.sm`
        padding: 10px;
    `}

    ${media.xs`
        padding: 5px;
    `}
`;
 