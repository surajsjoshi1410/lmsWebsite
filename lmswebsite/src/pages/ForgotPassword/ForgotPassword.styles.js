import styled from "styled-components";
import {media,theme} from '../../style/theme/theme';

export const ForgotPasswordPageWrap = styled.div`
  .login-container {
    display: flex;
    height: 100vh;
    width: 100vw;
    background-color: ${( props) => props.theme.colors.darkwhite};
    margin: 0;

    ${media.md`
      flex-direction: column;
      align-items: center;
    `}
  }

  .login-image {
    flex: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    background:  ${(props) => props.theme.lineargradients.hoverPinkGradient};
    position: relative;

    ${media.md`
      height: 50vh;
      flex: none;
      width: 100%;
    `}
  }

  .login-image img {
    max-width: 100%;
    height: 100vh;

    ${media.md`
      height: auto;
      max-height: 100%;
    `}
  }

  .login-page-form-main-container {
    flex: 2;
    padding: 5rem;
    background-color: ${(props) => props.theme.colors.darkwhite};
    display: flex;
    flex-direction: column;
    justify-content: center;

    ${media.xl`
      padding: 4rem;
    `}

    ${media.md`
      padding: 2rem;
      width: 90%;
    `}
  }

  h2 {
    color: ${(props) => props.theme.colors.gray700};
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${(props) => props.theme.colors.frenchGray};
    margin-bottom: 1.5rem;
  }

  .error-message {
    color: red;
    margin-bottom: 1rem;
  }

  .options {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;

    a {
      color: ${(props) => props.theme.colors.pink4};
      text-decoration: none;
      font-weight: bold;
    }
  }

  .login-button {
    padding: 1rem;
    background: ${(props) => props.theme.lineargradients.pinkGradient};
    border: none;
    border-radius: 2.2rem;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: ${(props) => props.theme.lineargradients.hoverPinkGradient}!important;
    }
  }

  p a {
    color: ${(props) => props.theme.colors.pink4};
    text-decoration: none;
    font-weight: bold;
  }
`;
