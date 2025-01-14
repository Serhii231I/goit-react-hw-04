import { useState } from "react";
import toast from "react-hot-toast/headless";
import s from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      toast.error("Please enter a search query!");
      return;
    }
    onSubmit(query);
    setQuery("");
  };
  return (
    <header className={s.headerContainer}>
      <form className={s.inputContainer} onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className={s.serchBtn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};
export default SearchBar;
