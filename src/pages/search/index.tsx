import React from 'react';
import {ListCard} from "../../components/list-card";
import useSWR from "swr";
import {Data} from "../../api/base-api";
import {Spinner} from "../../components/spinner";
import {useLocation} from "react-router";
import {UserInterface} from "../../interfaces/user-interface";

function Search() {
  const apiCall = new Data();
  const {data, error} = useSWR("users", apiCall.getAllData);
  const location = useLocation();
  const term = new URLSearchParams(location.search).get("term");

  if (!data) {
    return <Spinner/>;
  }

  const filteredData = data.data.filter((item: UserInterface) => {
    if (term?.length === 0) {
      return item;
    }

    const fullName = item.first_name + " " + item.last_name;
    return fullName.toLowerCase().indexOf(term!.toLowerCase()) > -1;
  });

  if (error) {
    return <h1>Something went wrong, please back to home page!.</h1>;
  }

  if (filteredData.length === 0) {
    return <h1 className="not-found_title">Nothing found, the user does not exit or correct the search params</h1>;
  }

  return (
    <section className="search">
      <div className="container">
        <ListCard data={filteredData} category={"users"}/>
      </div>
    </section>
  );
}

export default Search;