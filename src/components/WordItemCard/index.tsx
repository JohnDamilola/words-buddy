import { useState } from "react";
import SadImg from "../../assets/img/sorry.svg";
import FavouriteIcon from "../FavouriteIcon";

interface WordItemCardProps {
  item: any;
}

const WordItemCard = ({ item }: WordItemCardProps) => {
  const { status, data, error } = item;
  const { word, meanings, phonetics } = data || {};
  const { message } = error || {};
  const [showMore, setShowMore] = useState(false);

  const { audio: phoneticAudio, text: phoneticText } =
    (phonetics && phonetics[0]) || {};

  const audio = new Audio(phoneticAudio)

  const play = () => {
    audio.play()
  }
  const visibleMeanings = showMore
    ? meanings
    : (meanings && [meanings[0]]) || [];
  const visibleDefinitions = (definitions: any) => {
    return showMore ? definitions : (definitions && [definitions[0]]) || [];
  };

  const showShowMoreButton = meanings
    ? meanings.length > 1 || meanings[0].definitions.length > 1
    : false;
  return (
    <div className="words-item">
      {status === "fulfilled" ? (
        <>
        <div className="d-flex justify-content-between">
          <h3>{word}</h3>
          <FavouriteIcon word={word} />
        </div>
          <p className="sound">
            {phoneticText}{" "}
            {
              phoneticAudio && 
              <i
                className="lni lni-volume-medium icon-volume"
                onClick={() => play()}
              />
            }
          </p>

          {visibleMeanings.map((meaning: any) => {
            const { partOfSpeech, definitions } = meaning;
            const _visibleDefinitions = visibleDefinitions(definitions);

            return (
              <>
                {_visibleDefinitions?.map(
                  ({ definition, example, synonyms }: any) => {
                    return (
                      <div className="section-divider">
                        <p>
                          <span className="green-text">{partOfSpeech}</span> .{" "}
                          {definition}
                        </p>
                        <div className="synonymns-pane">
                          <p>
                            Example:{" "}
                            <span className="grey-text">{example}</span>
                          </p>
                          <span>Similar: </span>
                          {synonyms.length > 0 ? (
                            synonyms.map((synonym: any) => (
                                <span className="synonymn-tag">
                                  {synonym},{" "}
                                </span>
                              ))
                          ) : (
                            <span className="synonymn-tag">None found</span>
                          )}
                        </div>
                      </div>
                    );
                  }
                )}
              </>
            );
          })}
        </>
      ) : (
        <div className="error">
          <h3>{item.word}</h3>
          <div className="text-center">
            <img src={SadImg} className="img-fluid" alt="sad error" />
            <p>{message}</p>
          </div>
        </div>
      )}
      {showShowMoreButton && (
        <div
          className={`see-more ${showMore ? "showMore" : "showLess"}`}
          onClick={() => setShowMore(!showMore)}
        >
          <span className="text">{showMore ? "See Less" : "See More"}</span>
          <i className={`lni lni-chevron-${showMore ? "up" : "down"}`} />
        </div>
      )}
    </div>
  );
};

export default WordItemCard;
