import React from "react";
import circle from "../img/circle.png";
import { Avatar } from "@material-ui/core";

export const persons = [];

for (let i = 1; i <= 5; i++) {
  persons.push({ id: i, image: circle, name: `Following_${i}` });
}
function Profile({ image, name }) {
  return (
    <div>
      <div className="profile">
        <Avatar src={image}></Avatar>
        <p>{name}</p>
      </div>
    </div>
  );
}

function Following({ name }) {
  if (name === "MainPage") {
    return (
      <div className="following-container">
        {persons.map((person, index) => (
          <Profile
            key={index}
            image={person.image}
            name={person.name}
          />
        ))}
      </div>
    );
  } else if (name === "SharingFilePage") {
    return (
      <div className="following-container">
        {persons.map((person, index) => (
          <Profile
            key={index}
            image={person.image}
            name={person.name}
          />
        ))}
      </div>
    );
  }
}

export default Following;
