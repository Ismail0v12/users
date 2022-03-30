import React from 'react';
import {UserInterface} from "../../interfaces/user-interface";
import {Card} from "../card";

interface ListCardProps {
  readonly data: UserInterface[];
  readonly category: string;
}

function ListCard({data, category}: ListCardProps) {
  const content = data.map((user) => (
    <div key={user.id} className="col-lg-3 col-md-4 col-6">
      <Card
        name={user.first_name + " " + user.last_name}
        email={user.email}
        avatar={user.avatar}
        id={user.id}
        year={user.year}
        color={user.color}
        pantone_value={user.pantone_value}
        category={category}
      />
    </div>
  ));
  return (
    <div className="row gy-4">
      {content}
    </div>
  );
}

export {ListCard};