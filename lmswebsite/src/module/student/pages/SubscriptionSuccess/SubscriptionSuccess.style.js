import { theme } from "../../../../style/theme/theme";
import styled from "styled-components";


export const SubscriptionSuccessWrap = styled.div`

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        color: ${theme.colors.red};
        text-align: center;
        padding: 20px;
        background-color: ${(props) => props.theme.colors.darkwhite};

         .SubscriptionSuccessWrap-btn{
              background: ${(props) => props.theme.lineargradients.pinkGradient};
              border-color: ${(props) => props.theme.colors.pink6};
              color: ${(props) => props.theme.colors.white};
              border-radius: "5px";
              &:hover{
                  background: ${(props) => props.theme.lineargradients.hoverPinkGradient}!important;
                }
            }
        .SubscriptionSuccessWrap-title1{
        color:${(props) => props.theme.colors.pink4};
        margin-bottom: 20px;
        }
        .SubscriptionSuccessWrap-title2{
        color:${(props) => props.theme.colors.frenchGray};
        margin-bottom: 30px;
        font-size: 18px;
        }
          
`;
