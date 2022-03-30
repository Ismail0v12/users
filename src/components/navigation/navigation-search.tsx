import React, {useState} from 'react';
import SearchIcon from "../../assets/icons/search-icon";
import {useNavigate} from "react-router";

interface NavigationSearchProps {
  readonly setIsMenuOpen: () => void;
}

function NavigationSearch({setIsMenuOpen}: NavigationSearchProps) {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  function submitHandler(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    const navigateTo = `/search?term=${term}`;
    navigate(navigateTo);
    setIsMenuOpen();
  }

  return (
    <form className="header__menu-search" onSubmit={submitHandler}>
      <input
        className="input"
        type="search"
        value={term}
        onChange={e => setTerm(e.target.value)}
        placeholder="Search"
        required={true}
      />
      <button type="submit"><SearchIcon/></button>
    </form>
  );
}

export default NavigationSearch;