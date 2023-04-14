import React from "react";
import LayoutItem from "../components/layout/LayoutItem";

const HomePage = () => {
  return (
    <div>
      <div className="home">
        <div className="sidebar">
          {menu.map((item) => (
            <div key={item.title} className="item-menu">
              <a href={item.url}>{item.title}</a>
            </div>
          ))}
        </div>
        <div className="layout ">
          <img src="../logoNCC.png" alt="" />
          <div className="container layout-top">
            <h2>Lorem ipsum dolor sit asmet?</h2>
            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tristique consequat placerat. Vestibulum auctor pellentesque sem,
              eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam
              facilisis, ligula in mattis sodales, augue justo tristique nulla,
              sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel
              mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend
              convallis. Quisque suscipit maximus vestibulum. Phasellus congue
              mollis orci, sit amet luctus augue tristique eu. Donec vulputate
              odio neque, sed semper turpis pellentesque a.
            </div>
          </div>
          <div className="container layout-bottom">
            {logos.map((item) => (
              <LayoutItem key={item.id} item={item}></LayoutItem>
            ))}
          </div>
          <footer className="footer">
            <span>Copyright © 2021</span>
          </footer>
        </div>
      </div>
    </div>
  );
};
const menu = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/",
    title: "Services",
  },
  {
    url: "/",
    title: "News",
  },
  {
    url: "/",
    title: "Blog",
  },
  {
    url: "/",
    title: "Contact",
  },
];

const logos = [
  { id: 1, url: "../css.png" },
  { id: 2, url: "../html.png" },
  { id: 3, url: "../url.png" },
];
export default HomePage;
