import { useState } from "react";
import { ResultsWrapper } from "./styles";

const Results = () => {
  const [mode, setMode] = useState("wod");
  const words = [
    {
      word: "abound",
      sound: "/əˈbaʊnd/",
      definition: "exist in large numbers or amounts.",
    },
    {
      word: "amorphous",
      sound: "/əˈmɔːfəs/",
      definition: "without a clearly defined shape or form.",
    },
    {
      word: "austere",
      sound: "/ɒˈstɪə,ɔːˈstɪə/",
      definition: "severe or strict in manner or attitude.",
    },
    {
      word: "abound",
      sound: "/əˈbaʊnd/",
      definition: "exist in large numbers or amounts.",
    },
    {
      word: "amorphous",
      sound: "/əˈmɔːfəs/",
      definition: "without a clearly defined shape or form.",
    },
    {
      word: "austere",
      sound: "/ɒˈstɪə,ɔːˈstɪə/",
      definition: "severe or strict in manner or attitude.",
    },
    {
      word: "abound",
      sound: "/əˈbaʊnd/",
      definition: "exist in large numbers or amounts.",
    },
    {
      word: "amorphous",
      sound: "/əˈmɔːfəs/",
      definition: "without a clearly defined shape or form.",
    },
    {
      word: "austere",
      sound: "/ɒˈstɪə,ɔːˈstɪə/",
      definition: "severe or strict in manner or attitude.",
    },
    {
      word: "abound",
      sound: "/əˈbaʊnd/",
      definition: "exist in large numbers or amounts.",
    },
    {
      word: "amorphous",
      sound: "/əˈmɔːfəs/",
      definition: "without a clearly defined shape or form.",
    },
    {
      word: "austere",
      sound: "/ɒˈstɪə,ɔːˈstɪə/",
      definition: "severe or strict in manner or attitude.",
    },
  ];

  const onHandleClick = () => {
    setMode("results");
  };

  return (
    <ResultsWrapper>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="app">
              <div className="masthead">
                <h1>Dictionary</h1>
                <p>/ˈdɪkʃ(ə)n(ə)ri/ .noun</p>
                <div className="input-pane">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter word(s) here"
                      aria-label="Enter word(s) here"
                      aria-describedby="button-addon2"
                    />
                    <button
                      onClick={onHandleClick}
                      className="btn btn-outline-secondary"
                      type="button"
                      id="button-addon2"
                    >
                      <i className="lni lni-search"></i> Search
                    </button>
                  </div>
                </div>
              </div>
              {mode === "results" ? (
                <div className="words-of-the-day overflow">
                  <div className="row">
                    <div className="col-md-12">
                      <h3>Results</h3>
                    </div>
                  </div>
                  <div className="row">
                    {words.map(({ word, sound, definition }, index) => {
                      return (
                        <div className="col-md-6">
                          <div className="words-item">
                            <h3>{word}</h3>
                            <p className="sound">{sound} .noun</p>

                            <p>{definition}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="words-of-the-day">
                  <div className="row">
                    <div className="col-md-12">
                      <h3>Words of the Day</h3>
                    </div>
                  </div>
                  <div className="row">
                    {words.map(({ word, sound, definition }, index) => {
                      return (
                        <div className="col-md-4">
                          <div className="words-item">
                            <h3>{word}</h3>
                            <p className="sound">{sound} .noun</p>

                            <p>{definition}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </ResultsWrapper>
  );
};

export default Results;
