import Masonry from "react-masonry-css";
import WordItemCard from "../../components/WordItemCard";

const breakpointColumnsObj = {
  default: 2,
  1100: 2,
  700: 2,
  500: 1,
};

interface IProps {
  wordsArray: any[];
  data: any;
  isFetchingNextPage: boolean;
  hasNextPage: boolean | undefined;
  fetchNextPage: () => void;
}

const WordList = ({ wordsArray, data, isFetchingNextPage, hasNextPage, fetchNextPage }: IProps) => {
  return (
    <>
      <div className="words-of-the-day overflow">
        <div className="row" data-masonry='{"percentPosition": true }'>
          <div className="col-md-12">
            <h3 className="results">Results ({wordsArray.length})</h3>
          </div>
        </div>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {data.pages?.map((group: any, i: number) => {
            return group.data.map((item: any, index: number) => (
              <WordItemCard item={item} key={`${i}-${index}`} />
            ));
          })}
        </Masonry>
      </div>
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
            className="btn btn-more"
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
          >
            Load More
          </button>
        ) : null}
      </div>
    </>
  );
};

export default WordList;
