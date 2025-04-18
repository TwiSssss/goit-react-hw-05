import style from "./SearchBar.module.css";
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import toast from 'react-hot-toast';

const SearchBar = ({ onSubmit }) => {
  const [searchInput, setSearchInput] = useState('');
  const handleChange = (e) => setSearchInput(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim() === '') {
      toast.error('Enter text to search!');
      return;
    }
    onSubmit(searchInput);
    setSearchInput('');
  };

  return (
    <header className={style.header}>
      <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">  <FaSearch size={16}  /></button>
       <input
        className={style.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchInput}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

export default SearchBar;
