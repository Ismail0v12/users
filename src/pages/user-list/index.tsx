import React from 'react';
import useSWRInfinite from "swr/infinite";
import {Data} from "../../api/base-api";
import {Spinner} from "../../components/spinner";
import {Card} from "../../components/card";
import {UserInterface} from "../../interfaces/user-interface";
import "./list.scss";


function UserList() {
  const apiCall = new Data();
  const {data, error, setSize, size} = useSWRInfinite(
    (index) => `users?page=${index + 1}`, apiCall.getAllData, {
      revalidateIfStale: true
    });

  if (!data) {
    return <Spinner/>;
  }

  console.log();
  if (error) {
    return <h1>Something went wrong please try again</h1>;
  }


  return (
    <section className="list">
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-12">
            <h2>All Users</h2>
          </div>
          {data.map(cardItem => {
            const info = cardItem.data;
            return info.flatMap((item: UserInterface) => (
              <div key={item.id} className="col-lg-3 col-md-4 col-6">
                <Card
                  email={item.email}
                  name={item.first_name + " " + item.last_name}
                  color={item.color}
                  id={item.id}
                  avatar={item.avatar}
                  category={"users"}/>
              </div>
            ));
          })}
        </div>
        {size !== data[0].total_pages && (
          <button className="button list__button" onClick={() => setSize(size + 1)}>Load more</button>
        )}
      </div>
    </section>
  );
}

export default UserList;