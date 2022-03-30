import React from 'react';
import './profile.scss';

function Profile() {
  return (
    <section className="profile">
      <div className="container">
        <div className="profile__wrapper">
          <div className="shape">
            <div className="image">
              <img src="https://avatars.mds.yandex.net/i?id=ff764a3e5a47a39ca85a282cbc5d0f73-5544445-images-thumbs&n=13" alt="Users"/>
            </div>
          </div>
          <h3>Orif Ismailov</h3>
          <h3 className="title">Web Developer</h3>
          <p>Building complex UI, Working with different types of APIs, Implementation of business logic etc...</p>
        </div>
      </div>
    </section>
  );
}

export default Profile;