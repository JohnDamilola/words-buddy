import { useState, useEffect } from "react";
import { useInfiniteQuery } from "react-query";
import { useLocation, useHistory } from "react-router";
import { searchWords } from "../../apis/search";
import { HomeWrapper } from "./styles";
import Loader from "../../components/Loader";
import WordItemCard from "../../components/WordItemCard";
import CreatableSelect from "react-select/creatable";
import _ from "lodash";
import Logo from "../../assets/img/SearchCo.png";
import Div100vh from "react-div-100vh";
import Masonry from "react-masonry-css";
import { firebaseAnalytics } from "../../utils/firebase";

const useQueryLocation = () => {
  return new URLSearchParams(useLocation().search);
};

const Home = (props: any) => {
  const history = useHistory();
  const query = useQueryLocation();
  const recordsToTake = 10;
  const [mode, setMode] = useState("results");
  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = useState<any[]>([]);
  const searchQuery = query.get("q");

  const wordsArray = searchQuery ? _.uniq(searchQuery.split(",")) : [];

  useEffect(() => {
    firebaseAnalytics.logEvent("homepage_visited");
  }, [])

  const {
    data,
    error,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery<any, any>(
    ["search", searchQuery],
    ({ pageParam }) =>
      searchWords({
        words: wordsArray,
        recordsToTake,
        recordsToSkip: pageParam,
      }),
    {
      enabled: wordsArray.length > 0,
      getNextPageParam: (lastPage) => {
        const {
          recordsToSkip = 0,
          recordsToTake = 0,
          totalCount = 0,
        } = lastPage || {};
        return recordsToSkip + recordsToTake < totalCount
          ? recordsToSkip + 10
          : undefined;
      },
    }
  );

  useEffect(() => {
    if (searchQuery) {
      const value = searchQuery.split(",").map((item) => {
        return { label: item, value: item };
      });
      setValue(_.uniqBy(value, "value"));
      setInputValue("");
    }
  }, [searchQuery]);

  const handlePaste = (e: any) => {
    const copiedText = e.clipboardData.getData("text");
    const newValue = copiedText.split(",").map((item: any) => {
      return { label: item, value: item };
    });
    setValue(_.uniqBy([...value, ...newValue], "value"));
    setTimeout(() => {
      setInputValue("");
    }, 0);
  };

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
  ];

  const handleMultiChange = (value: any) => {
    setValue(_.uniqBy(value, "value"));
  };

  const handleInputChange = (option: string, { action }: any) => {
    console.log("action: ", action);
    if (action === "input-change") {
      const optionLength = option.length;
      const inputValueLength = inputValue.length;

      const newInputValue = optionLength < inputValueLength
          ? option
          : option;
      setInputValue(newInputValue);
    } 
    // else if (action === "clear") {
    //   console.log("cleared")
    //   history.push(``);
    // }
  };

  const createOption = (label: string) => ({
    label,
    value: label,
  });

  const handleKeyDown = (event: any) => {
    console.log(event.key);
    if (!inputValue) return;
    switch (event.key) {
      case ",":
      case "Enter":
      case "Tab":
        setValue(_.uniqBy([...value, createOption(inputValue)], "value"));
        setInputValue("");
        event.preventDefault();
        break;
      case "Backspace":
        break;
      default:
    }
  };

  const onHandleClick = (e: any) => {
    e.preventDefault();
    setMode("results");
    firebaseAnalytics.logEvent("bulk_search");
    if (value.length > 0) {
      const wordSplit = value.map((item) => item.value.trim());
      inputValue && wordSplit.push(inputValue);
      history.push(`?q=${wordSplit}`);
    } else if (inputValue) {
      history.push(`?q=${inputValue}`);
    }
  };

  const breakpoints = [500, 768, 1024];

  const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

  const breakpointColumnsObj = {
    default: 2,
    1100: 2,
    700: 2,
    500: 1
  };

  return (
    <Div100vh>
      <HomeWrapper hasSearchResult={data ? true : false}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="app">
                <div className="ribbon">
                  <span>Built with ❤️ by John Damilola</span>
                </div>
                <div className="masthead">
                  <img src={Logo} className="img-fluid" alt="logo" />
                  <div className="input-pane">
                    <form
                      className="input-group mb-3"
                      onSubmit={onHandleClick}
                      onPaste={handlePaste}
                    >
                      <CreatableSelect
                        {...props}
                        isMulti
                        isClearable
                        className="multi-input"
                        placeholder="Type each word and press enter"
                        maxMenuHeight={0}
                        menuIsOpen={false}
                        onChange={handleMultiChange}
                        inputValue={inputValue}
                        onInputChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        value={value}
                        components={{
                          DropdownIndicator: null,
                        }}
                        styles={{
                          option: (provided, { isFocused }) => {
                            return {
                              ...provided,
                              backgroundColor: isFocused ? "#fff" : "#fff",
                            };
                          },
                          control: (provided, { isFocused }) => {
                            return {
                              ...provided,
                              backgroundColor: isFocused
                                ? "#f2f2f2"
                                : "#f2f2f2",
                              display: "flex",
                              border: `2px solid ${
                                isFocused ? "#f2f2f2" : "#222"
                              }`,
                              padding: "10px 0px",
                              borderColor: isFocused ? "#f2f2f2" : "#222",
                              boxShadow: "none",
                              borderRight: "none",
                              borderRadius: "6px 0px 0px 6px",
                              [mq[0]]: {
                                borderRadius: "6px 6px 0px 0px",
                              },
                            };
                          },
                          multiValue: (provided, { isFocused }) => {
                            return {
                              ...provided,
                              backgroundColor: isFocused ? "#222" : "#fff",
                              color: isFocused ? "#fff" : "#222",
                            };
                          },
                          input: (provided) => {
                            return {
                              ...provided,
                              fontSize: "13px",
                            };
                          },
                        }}
                      />
                      <button
                        onClick={onHandleClick}
                        className="btn btn-outline-secondary"
                        type="button"
                        id="button-addon2"
                        disabled={isLoading}
                      >
                        <i className="lni lni-search"></i> {isLoading ? "Searching..." : "Search"}
                      </button>
                    </form>
                  </div>
                </div>
                {isLoading ? (
                  <div
                    className="loader"
                  >
                    <div>
                      <Loader />
                      <p>Please wait..</p>
                    </div>
                  </div>
                ) : error ? (
                  error?.response?.data?.message || "Oops, an error occured"
                ) : mode === "results" && data ? (
                  <div className="words-of-the-day overflow">
                    <div
                      className="row"
                      data-masonry='{"percentPosition": true }'
                    >
                      <div className="col-md-12">
                        <h3>Results ({wordsArray.length})</h3>
                      </div>
                    </div>
                    <Masonry
                      breakpointCols={breakpointColumnsObj}
                      className="my-masonry-grid"
                      columnClassName="my-masonry-grid_column"
                    >
                      {data.pages?.map((group, i) => {
                        return group.data.map((item: any, index: number) => (
                            <WordItemCard item={item} key={`${i}-${index}`} />
                        ))
                      })}
                    </Masonry>
                  </div>
                ) : mode === "wotd" ? (
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
                ) : null}

                <div className="text-center">
                  {isFetchingNextPage ? (
                    <button className="btn btn-primary" type="button" disabled>
                      <span
                        className="spinner-grow spinner-grow-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hiddens"> Loading...</span>
                    </button>
                  ) : hasNextPage ? (
                    <button
                      className="btn btn-outline-secondary btn-more"
                      onClick={() => fetchNextPage()}
                      disabled={!hasNextPage || isFetchingNextPage}
                    >
                      Load More
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </HomeWrapper>
    </Div100vh>
  );
};

export default Home;
