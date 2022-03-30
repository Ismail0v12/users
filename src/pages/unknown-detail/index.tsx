import React, {useState} from 'react';
import {useParams} from "react-router";
import useSWR from "swr";
import {Data} from "../../api/base-api";
import {Spinner} from "../../components/spinner";
import './unknow-detail.scss';

function UnknownDetail() {
  const apiCall = new Data();
  const params = useParams();
  const link = `unknown/${params.id}`;
  const {data, error} = useSWR(link, apiCall.getAllData);
  const [copied, setCopied] = useState(false);
  if (!data) {
    return <Spinner/>;
  }

  if (error) {
    return <h1>Something went wrong please back to home page! ^</h1>
  }

  function copyHandler() {
    setCopied(true);
    navigator.clipboard.writeText(data.data.color);
    setInterval(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <section className="unknown-detail">
      <div className="container">
        <div className="unknown-detail__card">
          <div className="unknown-detail__color" style={{backgroundColor: data.data.color}}/>
          <h4>Contrast: {data.data.name} </h4>
          <p className="unknown-detail__card-title">Color: {data.data.color}</p>
          <p>Pantone Value: {data.data.pantone_value}</p>
          <p>Year: {data.data.year}</p>
          <button className="button-filled" onClick={copyHandler}>{copied ? "Copied" : "Copy color"}</button>
        </div>
      </div>
    </section>
  );
}

export default UnknownDetail;