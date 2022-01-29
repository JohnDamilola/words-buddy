import GameListItem from "../../components/GameListItem";
import PlayIcon from "../../assets/img/pad.svg";

const games = [
  {
    id: "game1",
    title: "Scramble Words",
    description: " In the game, the letters that can make a meaningful word are scrambled or mixed up together in a random fashion. Players have to rearrange the letters to make a meaningful word.",
    backgroundCover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ-1nNb1pkacVywPXXmCaRWS2EPArQM8TtTkL47D6UQi1PDGRGAfxQyB4vH5LV84Q_PTM&usqp=CAU"
  },
  {
    id: "game1",
    title: "Word Search",
    description: "The goal is to find and highlight all of the words hidden in the puzzle. The words may be placed diagonally, horizontally, vertically, or backwards. All hidden words can be found.",
    backgroundCover: "https://lh3.googleusercontent.com/CHY0Ty3GEgXyO96ka_mditVR8dd3qJMEwxHaBInhlnRGpVGQlINXHGHZkK1djJJgkhs"
  },
  {
    id: "game1",
    title: "Names of 'XYZ' Game",
    description: "Game 1",
    backgroundCover: "https://cdn.dribbble.com/users/191255/screenshots/3285558/screen_shot_2017-02-12_at_23.50.30.jpg?compress=1&resize=400x300"
  },
]

const GameList = () => {
  return (
    <>
      <h4><img width="30px" src={PlayIcon} alt="play" /> Games</h4>
      <div className="row">
        {games.map((item: any) => (
          <div className="col-md-4">
              <GameListItem
                title={item.title}
                backgroundCover={item.backgroundCover}
                description={item.description}
              /> 
          </div>
        ))}
      </div>
    </>
  );
};

export default GameList;
