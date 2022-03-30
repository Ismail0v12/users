import React from 'react';
import './home.scss';
import useSWR from "swr";
import {Data} from "../../api/base-api";
import {Spinner} from "../../components/spinner";
import {ListCard} from "../../components/list-card";
import {Link} from "react-router-dom";

function Home() {
  const fetcher = new Data();
  const {data, error} = useSWR("users", fetcher.getAllData);
  const {data: unknown, error: unknownError} = useSWR("unknown", fetcher.getAllData);


  if (!data || !unknown) {
    return <Spinner/>;
  }

  if (error && unknownError) {
    return <h1>Something went wrong please try again</h1>;
  }

  const homeData = data.data.slice(0, 4);
  const unknownData = unknown.data.slice(0, 4);
  return (
    <section className="home">
      <div className="container">

        <div className="home__content">
          <h3>Top Users:</h3>
          <ListCard data={homeData} category={"users"}/>
          <Link to="/users" className="button home__button">All users</Link>
        </div>

        <div className="home__content">
          <h3>Top Unknown:</h3>
          <ListCard data={unknownData} category={"unknown"}/>
          <Link to="/unknown" className="button home__button">All unknown</Link>
        </div>

      </div>
    </section>
  );
}

export default Home;