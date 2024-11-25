import styled from "styled-components";
import { media } from "../../../../style/theme/theme";

export const AppBarWrap = styled.div`
  box-shadow: 0 0.125rem 0.25rem rgba(165, 163, 174, 0.3);
  padding: 8px;
  // margin: 16px;
  border-radius: 6px;
  max-width: 100%;
  // width: 100vw;
  background-color: ${(props) => props.theme.colors.white};

  ${media.xxxl`
    padding: 14px 12px;
    margin: 12px;
  `};

  .appbar-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .appbar-title {
    font-size: 20px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.cadet};

    ${media.lg`
      display: none;
    `}
  }

  .appbar-left {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    column-gap: 12px;
  }

  .appbar-right {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    ${media.lg`
      flex: 1;
    `}
  }

  .sidebar-open-btn {
    display: inline-flex;
    align-items: center;
    color: ${(props) => props.theme.colors.cadet};
    display: none;

    ${media.xl`
      display: inline-flex;
    `}
  }

  .appbar-search {
    .input-group {
      background-color: ${(props) => props.theme.colors.seasalt};
      border-radius: 6px;
      height: 44px;
      min-width: 320px;
      display: flex;
      align-items: stretch;
      padding: 4px 12px;
      position: relative;

      ${media.lg`
        min-width: 280px;
        margin-right: auto;
        margin-left: 12px;
        height: 40px;
      `}

      ${media.md`
        min-width: auto;
        background: transparent;
        margin-left: 0;
      `}

      .input-icon {
        width: 20px;
        display: inline-flex;
        place-items: center;
      }

      .input-control {
        border: none;
        outline: 0;
        font-size: 15px;
        color: ${(props) => props.theme.colors.gray700};
        padding-left: 12px;
        padding-right: 12px;
        background-color: transparent;

        ${media.md`
          position: absolute;
          top: 100%;
          left: 0;
          width: 260px;
          background: white;
          border: 1px solid #e5e5e5;
          height: 40px;
          border-radius: 4px;
          visibility: hidden;
          opacity: 0;

          &.show-input-control {
            visibility: visible;
            opacity: 1;
          }
        `}

        &::placeholder {
          color: ${(props) => props.theme.colors.gray700};
        }
      }
    }
  }

  .appbar-icon-btn {
    background: ${(props) => props.theme.colors.seasalt};
    width: 40px;
    height: 40px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    ${media.lg`
      width: 36px;
      height: 36px;
    `}

    ${media.xs`
      width: 32px;
      height: 32px;
    `}

    img {
      width: 20px;

      ${media.lg`
        width: 18px;
      `}
    }

    .icon-btn-dot {
      width: 6px;
      height: 6px;
      border-radius: 100%;
      background-color: ${(props) => props.theme.colors.cadet};
      position: absolute;
      top: 5px;
      right: 5px; /* Fixed typo */
    }
  }

  .profile-dropdown {
    margin-left: 24px;
    cursor: pointer;

    ${media.lg`
      margin-left: 16px;
    `}

    ${media.xs`
      margin-left: 16px;
    `}

    .drop-info {
      display: flex;
      align-items: center;
      column-gap: 16px;

      ${media.lg`
        column-gap: 10px;
      `}
    }

    .info-text-group {
      display: flex;
      flex-direction: column;
      min-width: 80px;
      line-height: 1.4;
      width: 80px;

      ${media.md`
        min-width: auto;
        width: auto;
      `}

      span {
        &:nth-child(1) {
          font-weight: 600;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;

          ${media.md`
            display: none;
          `}
        }

        &:nth-child(2) {
          font-size: 14px;
          color: ${(props) => props.theme.colors.gray700};
          ${media.lg`
            display: none;
          `}
        }
      }
    }
  }

  .drop-info-img {
    width: 45px;
    height: 45px;
    overflow: hidden; /* Fixed typo */
    border-radius: 100%;

    ${media.lg`
      width: 32px;
      height: 32px;
    `}

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .drop-info-text {
    display: flex;
    align-items: center;
  }

  .drop-icon {
    margin-top: 4px;
    width: 18px;
    min-width: 18px;
  }

  .notification-bell {
    background: none;
    border: none;
    cursor: pointer;
    margin-left: 15px;
  }

  .notification-modal {
    position: absolute;
    right: 10px;
    top: 50px;
    width: 300px;
    background: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    z-index: 1000;
  }

  .modal-header {
    display: flex;
    justify-content: space-around;
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }

  .tab-button {
    background: none;
    border: none;
    font-weight: bold;
    cursor: pointer;
  }

  .tab-button.active {
    color: #007bff;
  }

  .modal-content {
    padding: 15px;
  }
`;
