import { useState } from "react";
import styled from "styled-components";
import { useToasts } from "react-toast-notifications";
import toast, { Toaster } from "react-hot-toast";

interface IProps {
  word: string;
}

const FavouriteIcon = ({ word }: IProps) => {
  const [active, setActive] = useState(false);
  const { addToast } = useToasts();
  const audio = new Audio("https://www.joshwcomeau.com/sounds/switch-on.mp3");
  const play = () => {
    audio.play();
  };

  return (
    <FavouriteIconWrapper
      active={active}
      onClick={() => {
        setActive(!active);
        play();
        addToast(`"${word}" has been ${!active ? "added to" : "removed from"} favourites`, {
          appearance: active ? "error" : "success",
          autoDismiss: true,
          newestOnTop: true,
          placement: 'top-center'
        });
      }}
      className={active ? "active" : "inactive"}
    >
      {active ? (
        <i className="lni lni-heart-filled" />
      ) : (
        <i className="lni lni-heart" />
      )}
    </FavouriteIconWrapper>
  );
};

export default FavouriteIcon;

interface FavouriteIconWrapperProps {
  active: boolean;
}

const FavouriteIconWrapper = styled.span<FavouriteIconWrapperProps>`
  font-size: 25px;
  margin-top: -5px;
  &.active {
    color: crimson;
  }
`;
