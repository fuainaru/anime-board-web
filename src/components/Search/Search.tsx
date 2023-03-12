import React, { useCallback } from "react";
// @ts-ignore
import IconSearch from "@iconscout/react-unicons/icons/uil-search";

interface SearchProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

const Search: React.FC<SearchProps> = (props) => {
  const { placeholder, value, onChange, onSubmit } = props;

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      return onSubmit();
    },
    [onSubmit]
  );

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center font-medium text-white">
        <div className="flex items-center rounded-l-lg border-2 border-[#383840] px-3 py-2">
          <IconSearch color="#797981" />
          <input
            className="bg-transparent outline-none w-full pl-2"
            placeholder={placeholder}
            value={value}
            onChange={(event) => onChange(event.target.value)}
          />
        </div>
        <button
          className="bg-[#fba100] border-2 border-[#fba100] px-3 py-2 rounded-r-lg"
          onClick={onSubmit}
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
