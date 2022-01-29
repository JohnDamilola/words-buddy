import CreatableSelect from "react-select/creatable";

interface IProps {
    onHandleClick: (e: any) => void;
    handlePaste: (e: any) => void;
    handleMultiChange: (value: any) => void;
    inputValue: string;
    handleInputChange: (option: string, { action }: any) => void;
    handleKeyDown: (event: any) => void;
    isLoading: boolean;
    value: any[];
}

const breakpoints = [500, 768, 1024];

const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const Search = ({
  onHandleClick,
  handlePaste,
  handleMultiChange,
  inputValue,
  handleInputChange,
  handleKeyDown,
  isLoading,
  value,
}: IProps) => {
  return (
    <div className="input-pane">
      <form
        className="input-group mb-3"
        onSubmit={onHandleClick}
        onPaste={handlePaste}
      >
        <CreatableSelect
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
                backgroundColor: isFocused ? "#f2f2f2" : "#f2f2f2",
                display: "flex",
                border: `2px solid ${isFocused ? "#f2f2f2" : "#222"}`,
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
          <i className="lni lni-search"></i>{" "}
          {isLoading ? "Searching..." : "Search"}
        </button>
      </form>
    </div>
  );
};

export default Search;
