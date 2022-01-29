import styled from "styled-components";
import boy from "./../../assets/img/boy.svg";
import girl from "./../../assets/img/girl.svg";
import line from "./../../assets/img/line.svg";

interface HomeWrapperProps {
  hasSearchResult: boolean;
}

export const HomeWrapper = styled.div<HomeWrapperProps>`
  /* background: #101118;
  background: url(${line}), #101118;
  background-size: contain; */
  padding: 40px 20px;
  min-height: 100vh;
  max-height: 100vh;
  /* display: flex;
  align-items: center; */

  /* background-repeat: no-repeat; */
  background: #101118;
  background-position: bottom;
  height: 100%;
  overflow: hidden;
  /* background-image: linear-gradient(25deg, #2d1204, #6c4a15, #b3881a, #ffcd18); */
  /* background-image: linear-gradient(88.16389854203999deg, rgba(243, 72, 104,1) 20.524739583333332%,rgba(242, 71, 104,1) 20.524739583333332%,rgba(158, 0, 236,1) 79.01432291666666%); */
  /* background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%); */
  /* background-image: linear-gradient(to right, #434343 0%, black 100%); */
  /* background: linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%);
  background-blend-mode: multiply; */
  width: 100vw;
  padding: 30px 30px 10vh;
  z-index: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  position: relative;

  @media (max-width: 500px) {
    padding: 0px;
    height: auto;
    min-height: 100vh;
    max-height: none;
  }
  .tmp__home--bg--first {
    position: absolute;
    top: 0;
    background: linear-gradient(2deg, #e6b980 1%, transparent 100%);
    width: 100%;
    height: 60vh;
    display: flex;
    border-bottom-left-radius: 12vw;
    border-top-left-radius: 12vw;
    transform: rotate(-42deg) translateY(-40vh);
    right: -10vw;
  }
  .tmp__home--bg--second {
    background: linear-gradient(150deg, #e6b980 100%, transparent);
    width: 100%;
    height: 40vh;
    transform: rotate(-42deg) translate(40vh, 60vh) scale(1.8);
    position: absolute;
  }
  .app {
    background: #daaa1a;
    /* background-image: linear-gradient(to top, #4481eb 0%, #04befe 100%); */
    /* background-image: linear-gradient(-225deg, #3D4E81 0%, #5753C9 48%, #6E7FF3 100%); */

    /* background-image: linear-gradient(to top, #181f3a 0%, #9b23ea 100%); */

    position: relative;
    padding: 30px 30px;
    ${(props) => props.hasSearchResult && "height: calc(100vh - 80px)"};
    overflow: scroll;
    border-radius: 10px;
    @media (max-width: 500px) {
      overflow: visible;
      padding: 20px;
      padding-bottom: 60px;
      border-radius: 0px;
      ${(props) => props.hasSearchResult && "height: 100%"};
    }
    .masthead {
      text-align: center;
      img {
        margin-top: 25px;
        margin-bottom: 25px;
        @media (max-width: 500px) {
          width: 80%;
        }
      }
      h1 {
        margin-bottom: 4px;
      }
      p {
        font-weight: 400;
        font-size: 14px;
        margin-bottom: 5px;
        margin-top: 15px;
      }
      .input-pane {
        background: #101118;
        border-radius: 6px;
        ${(props) => !props.hasSearchResult && "margin-bottom: 50px"};
        .input-group
          > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
          margin-left: 0px;
        }
        .multi-input {
          flex: 1;
          div {
            box-shadow: none;
            border: none;
          }
          .react-select__control {
            @media (max-width: 500px) {
              border-radius: 0px 0px 0px 0px;
            }
          }
        }
        .input-group {
          box-shadow: 0 2px 5px 2px rgba(0, 0, 0, 0.1);
          border-radius: 6px;
        }
        input {
          height: 30px;
          padding: 0px 20px;
          font-size: 14px;
          background: #222;
          color: #fff;
          border: 2px solid #222;
          &:focus {
            outline: none;
            box-shadow: none;
          }
        }
        button {
          font-size: 14px;
          padding: 0px 25px;
          background: #101118;
          color: #fff;
          border-color: #101118;
          border-left: 1px solid #fff;
          border: 2px solid #101118;
          box-shadow: none;
          @media (max-width: 500px) {
            width: 100%;
            height: 50px;
            border: 2px solid #101118;
            border-left: none;
            border-radius: 6px !important;
          }
        }
      }
      .side-note {
        font-size: 12px;
      }
    }
    .loader {
      height: 500px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      @media (max-width: 500px) {
        height: 200px;
      }
    }
    .words-of-the-day {
      padding: 20px 0px;
      h3 {
        font-size: 20px;
        margin-bottom: 20px;
        &.results {
          color: #fff;
        }
      }
      .words-item {
        background: #fff;
        padding: 20px;
        margin-bottom: 16px;
        border-radius: 6px;
        box-shadow: 0 2px 5px 2px rgba(0, 0, 0, 0.1);
        h3 {
          font-size: 18px;
          margin-bottom: 4px;
        }
        p {
          font-size: 13px;
          margin-bottom: 0px;
          &.sound {
            margin-bottom: 8px;
            display: flex;
            align-items: center;
            i:hover {
              color: green;
            }
          }
        }
        .section-divider {
          margin-bottom: 15px;
        }
        .see-more {
          font-size: 13px;
          padding: 10px 0px;
          margin-top: 10px;
          text-align: center;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
          .text {
            margin-right: 10px;
          }
          &.showMore {
            background: #f2f2f2;
            color: #333;
          }
          &.showLess {
            background: #f2f2f2;
            color: #3969d6;
          }
        }
        .icon-volume {
          font-size: 19px;
          margin-left: 10px;
        }
        .green-text {
          color: green;
        }
        .grey-text {
          color: #757360;
        }
        .error {
          h3 {
            color: crimson;
          }
          p {
            opacity: 0.8;
          }
          img {
            margin-bottom: 10px;
            margin-top: 20px;
            width: 80px;
            opacity: 0.8;
          }
        }
        .synonymns-pane {
          margin-top: 5px;
          span {
            font-size: 13px;
            margin-right: 5px;
          }
          .synonymn-tag {
            color: #757360;
            border-radius: 6px;
            margin-bottom: 0px;
            margin-right: 5px;
            display: inline-block;
            font-size: 12px;
          }
        }
      }
    }
    .btn-more {
      font-size: 14px;
      padding: 10px 25px;
      background: #101118;
      color: #fff;
      border-color: #fff;
      box-shadow: none;
      :disabled {
        background: #101118;
        color: #fff;
      }
    }
  }
`;
