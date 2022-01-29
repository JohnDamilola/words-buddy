import { useState, useEffect } from "react";
import { useInfiniteQuery } from "react-query";
import { useLocation, useHistory } from "react-router";
import { searchWords } from "../../apis/search";
import { HomeWrapper } from "./styles";
import Loader from "../../components/Loader";
import _ from "lodash";
import Logo from "../../assets/img/SearchCo.png";
import Div100vh from "react-div-100vh";
import { firebaseAnalytics } from "../../utils/firebase";
import Search from "../../components/Search";
import WordList from "../../containers/WordList";
import GameList from "../../containers/GameList";

const useQueryLocation = () => {
  return new URLSearchParams(useLocation().search);
};

const Home = (props: any) => {
  const history = useHistory();
  const query = useQueryLocation();
  const recordsToTake = 10;
  const [mode, setMode] = useState("menu");
  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = useState<any[]>([]);
  const searchQuery = query.get("q");

  const wordsArray = searchQuery ? _.uniq(searchQuery.split(",")) : [];

  useEffect(() => {
    firebaseAnalytics.logEvent("homepage_visited");
  }, []);

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

  const handleMultiChange = (value: any) => {
    setValue(_.uniqBy(value, "value"));
  };

  const handleInputChange = (option: string, { action }: any) => {
    if (action === "input-change") {
      const optionLength = option.length;
      const inputValueLength = inputValue.length;

      const newInputValue = optionLength < inputValueLength ? option : option;
      setInputValue(newInputValue);
    }
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

  useEffect(() => {
    if (data || error) {
      setMode("results")
    }
  }, [data, error]);

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
                  <Search
                    {...{
                      onHandleClick,
                      handlePaste,
                      handleMultiChange,
                      inputValue,
                      handleInputChange,
                      handleKeyDown,
                      isLoading,
                      value,
                    }}
                  />
                </div>
                {isLoading ? (
                  <div className="loader">
                    <div>
                      <Loader />
                      <p>Please wait..</p>
                    </div>
                  </div>
                ) : error ? (
                  error?.response?.data?.message || "Oops, an error occured"
                ) : mode === "results" && data ? (
                  <WordList
                    {...{
                      wordsArray,
                      data,
                      isFetchingNextPage,
                      hasNextPage,
                      fetchNextPage,
                    }}
                  />
                ) : mode === "menu" ? (
                  <GameList />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </HomeWrapper>
    </Div100vh>
  );
};

export default Home;
