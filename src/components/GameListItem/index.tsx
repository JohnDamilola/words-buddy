import styled from "styled-components";
import PlayIcon from "../../assets/img/play.svg";

interface Props {
  title: string;
  backgroundCover: string;
  description: string;
}

const GameListItem = ({ title, backgroundCover, description }: Props) => {
    return (
      <GameListItemWrapper backgroundCover={backgroundCover}>
        <div className="backgroundCover">
          <img width="30px" src={PlayIcon} alt="play" />
        </div>
        <div className="main">
          <h3>{title}</h3>
          {/* <p>{description}</p> */}
        </div>
      </GameListItemWrapper>
    );
};
  
export default GameListItem;
  

interface IProps {
  backgroundCover: string;
}

const GameListItemWrapper = styled.div<IProps>`
    min-height: 100px;
    border-radius: 6px;
    margin-bottom: 20px;
    border: 0px solid #fff;
    box-shadow: 0 2px 5px 2px rgba(0, 0, 0, 0.1);
    background-image: linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%);
    background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
    background-image: linear-gradient(to top, #c1dfc4 0%, #deecdd 100%);
    background-image: linear-gradient(to top, #6a85b6 0%, #bac8e0 100%);
    background: #fff;
    .backgroundCover {
      min-height: 100px;
      border-radius: 6px 6px 0px 0px;
      background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(3, 23, 39, 0.5)), url(${(props) => props.backgroundCover});
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      width: 100%;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      padding: 15px 15px;
      cursor: pointer;
      img {

      }
    }
    .main {
      padding: 15px 15px;
      h3 {
        font-size: 18px;
      }
      p {
        font-size: 14px;
      }
    }
`;