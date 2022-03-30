import React from 'react';
import {ListCard} from "../../components/list-card";
import useSWR from "swr";
import {Data} from "../../api/base-api";
import {Spinner} from "../../components/spinner";

function UnknownList() {
  const apiCall = new Data();
  const {data, error} = useSWR("unknown", apiCall.getAllData);
  if (!data) {
    return <Spinner/>;
  }
  if (data.data.length === 0) {
    return <h1>No Data found! :(</h1>;
  }
  if (error) {
    return <h1>Something went wrong please back to home page!.^</h1>;
  }

  return (
    <section className="unknown-list py-30">
      <div className="container">
        <h2>Unknown colors</h2>
        <ListCard data={data.data} category={"unknown"}/>
      </div>
    </section>
  );
}

export default UnknownList;