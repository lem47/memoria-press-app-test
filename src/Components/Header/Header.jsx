import React from 'react';
import './Header.scss';

export const Header = () => (
  <div className="Header">
    <div className="Header__school">
      <div className="Header__link">
        School 1
      </div>
      <svg
        width="10"
        height="5"
        viewBox="0 0 10 5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0L5 5L10 0H0Z" fill="#777777" />
      </svg>
    </div>
    <div className="Header__links">
      <a href="/analytics" className="Header__link">
        Analytics
      </a>
      <a href="/gradebooks" className="Header__link">
        Gradebooks
      </a>
      <a href="/tests" className="Header__link">
        Tests
      </a>
      <a href="/students" className="Header__link Header__link-active">
        Students
      </a>
      <a href="/teachers" className="Header__link">
        Teachers
      </a>
      <a href="/archive" className="Header__link">
        Archive
      </a>
    </div>
    <div className="Header__user">
      <img
        src="https://freesvg.org/img/abstract-user-flat-1.png"
        alt="user avatar"
        className="Header__userAvatar"
      />
      <svg
        width="10"
        height="5"
        viewBox="0 0 10 5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0L5 5L10 0H0Z" fill="#777777" />
      </svg>
    </div>
  </div>
);
