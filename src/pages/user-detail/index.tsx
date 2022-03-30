import React from 'react';
import './user-detail.scss';
import useSWR from "swr";
import {useParams} from "react-router";
import {Data} from "../../api/base-api";
import {Spinner} from "../../components/spinner";

function UserDetail() {
  const apiCall = new Data();
  const params = useParams();
  const keyParams = `users/${params.id}`;
  const {data, error} = useSWR(keyParams, apiCall.getAllData);

  if (!data) {
    return <Spinner/>;
  }

  if (error) {
    return <h1>Something went wrong please refresh the page</h1>;
  }
  return (
    <section className="user-detail">
      <div className="container">
        <div className="user-detail__card">
          <img
            src={data.data.avatar}
            alt={data.data.first_name} style={{width: "100%"}}/>
          <h1>{data.data.first_name} {data.data.last_name}</h1>
          <p className="user-detail__card-title">CEO & Founder, Reqres</p>
          <p>{data.data.email}</p>
          <a className="button-filled" href={`mailto: ${data.data.email}`}>Contact</a>
        </div>
      </div>
    </section>
  );
}

export default UserDetail;